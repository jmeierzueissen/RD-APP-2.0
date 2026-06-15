import { useEffect, useMemo, useState } from 'react'
import {
  AlertTriangle,
  ArrowLeft,
  Bell,
  BriefcaseMedical,
  CalendarDays,
  Calculator,
  ChevronRight,
  CircleUserRound,
  ClipboardList,
  FileText,
  Filter,
  HeartPulse,
  Home,
  KeyRound,
  Lock,
  LogOut,
  Menu,
  MoreHorizontal,
  Phone,
  Plus,
  Search,
  Settings,
  ShieldCheck,
  Star,
  Stethoscope,
  UserRoundCog,
  Workflow,
} from 'lucide-react'
import './App.css'
import { medicationData } from './medications'
import { sopIndex, sopSections } from './data/algorithms/sop/sopIndex'
import { medicationCalculatorRules } from './data/medications/calculators/medicationCalculatorRules'
import { calculateMedicationDose, formatNumber } from './data/medications/calculators/calculateMedication'
import { defaultCalendarMonth, defaultScheduleEntries } from './data/schedules/defaultSchedule'
import {
  colorForShiftType,
  createDraftShift,
  defaultWorktimeSettings,
  formatHours,
  normalizeWorktimeEntries,
  recalculateEntry,
  shiftColors,
  shiftTypes,
  summarizeWorktime,
  worktimeStorageKeys,
} from './data/worktime/worktime'

const USERS = [
  {
    email: 'retter@app.local',
    password: 'rettung2026',
    name: 'Max Mustermann',
    role: 'user',
    station: 'Wache Mitte',
  },
  {
    email: 'admin@app.local',
    password: 'admin2026',
    name: 'Admin',
    role: 'admin',
    station: 'Systemverwaltung',
  },
]

const quickActions = [
  { id: 'sops', label: 'SOPs', icon: FileText, color: 'blue' },
  { id: 'nun', label: 'NUN\nAlgorithmen', icon: Workflow, color: 'violet' },
  { id: 'calculator', label: 'Medikamenten-\nrechner', icon: Calculator, color: 'green' },
  { id: 'redList', label: 'Notfall-\nmedikamente', icon: ClipboardList, color: 'red' },
  { id: 'emergency', label: 'Notfall-\nnummern', icon: Phone, color: 'yellow' },
  { id: 'favorites', label: 'Favoriten', icon: Star, color: 'violet' },
  { id: 'admin', label: 'Tools', icon: BriefcaseMedical, color: 'gray' },
]

const nunAlgorithms = [
  { title: 'Reanimation (Erwachsene)', subtitle: 'NUN / ERC 2021', icon: Workflow, color: 'blue' },
  { title: 'Reanimation (Kind)', subtitle: 'NUN / ERC 2021', icon: Workflow, color: 'blue' },
  { title: 'ACS (STEMI / NSTEMI)', subtitle: 'NUN Algorithmus', icon: HeartPulse, color: 'red' },
  { title: 'Schlaganfall (Stroke)', subtitle: 'NUN Algorithmus', icon: Stethoscope, color: 'violet' },
  { title: 'Anaphylaxie', subtitle: 'NUN Algorithmus', icon: AlertTriangle, color: 'orange' },
  { title: 'Sepsis', subtitle: 'NUN Algorithmus', icon: HeartPulse, color: 'green' },
  { title: 'HypoglykÃ¤mie', subtitle: 'NUN Algorithmus', icon: Calculator, color: 'green' },
  { title: 'Krampfanfall', subtitle: 'NUN Algorithmus', icon: AlertTriangle, color: 'violet' },
]

const medicines = [
  ['Adrenalin', 'Katecholamin', 'yellow'],
  ['Amiodaron', 'Antiarrhythmikum', 'red'],
  ['ASS (AcetylsalicylsÃ¤ure)', 'Thrombozytenaggregationshemmer', 'green'],
  ['Atropin', 'Parasympatholytikum', 'green'],
  ['Clopidogrel', 'Thrombozytenaggregationshemmer', 'red'],
  ['Dexamethason', 'Kortikosteroid', 'green'],
  ['Diazepam', 'Benzodiazepin', 'orange'],
  ['Dobutamin', 'Katecholamin', 'green'],
  ['Epinephrin', 'Katecholamin', 'yellow'],
]

const contacts = [
  { group: 'Dienststellenleiter', name: 'Max Mustermann', phone: '0123456789000' },
  { group: 'Team/Wachenleiter', name: 'Platzhalter Leitung', phone: '0123456789001' },
  { group: 'Praxisanleiter (PAL)', name: 'Platzhalter PAL', phone: '0123456789002' },
  { group: 'Notrufnummern', name: 'Notruf 112', phone: '112' },
  { group: 'Giftnotrufzentrale', name: 'Giftnotruf Platzhalter', phone: '030 19240' },
]

const algorithmSteps = [
  ['Keine Reaktion?\nKeine normale Atmung?', 'red'],
  ['Notruf 112\nAED holen lassen', 'green'],
  ['30 Herzdruckmassagen\n2 Beatmungen', 'white'],
  ['AED anschlieÃŸen\nRhythmusanalyse', 'white'],
]

const tabs = [
  { id: 'home', label: 'Start', icon: Home },
  { id: 'sops', label: 'SOPs', icon: FileText },
  { id: 'nun', label: 'NUN', icon: Workflow },
  { id: 'calculator', label: 'Rechner', icon: Calculator },
  { id: 'redList', label: 'Medikamente', icon: ClipboardList },
]

const desktopTabs = [
  { id: 'home', label: 'Start', icon: Home },
  { id: 'schedule', label: 'Schichtplan', icon: CalendarDays },
  { id: 'sops', label: 'SOPs & Algorithmen', icon: FileText },
  { id: 'algorithm', label: 'Reanimation', icon: Workflow },
  { id: 'calculator', label: 'Medikamentenrechner', icon: Calculator },
  { id: 'redList', label: 'Notfallmedikamente', icon: ClipboardList },
  { id: 'emergency', label: 'Notfallnummern', icon: Phone },
  { id: 'favorites', label: 'Favoriten', icon: Star },
  { id: 'admin', label: 'Admin', icon: ShieldCheck },
]

const defaultFavorites = ['nun:Reanimation (Erwachsene)', 'nun:ACS (STEMI / NSTEMI)']

function favoriteId(type, title) {
  return `${type}:${title}`
}

function formatPages(pages) {
  if (pages.length === 1) {
    return `Seite ${pages[0]}`
  }
  return `Seiten ${pages[0]}-${pages[pages.length - 1]}`
}

function App() {
  const [currentUser, setCurrentUser] = useState(null)
  const [loginError, setLoginError] = useState('')
  const [activeScreen, setActiveScreen] = useState('home')
  const [selectedWeight, setSelectedWeight] = useState(70)
  const [activeMedicationName, setActiveMedicationName] = useState(null)
  const [showSplash, setShowSplash] = useState(true)
  const [favorites, setFavorites] = useState(() => {
    try {
      const stored = window.localStorage.getItem('app2:favorites')
      return stored ? JSON.parse(stored) : defaultFavorites
    } catch {
      return defaultFavorites
    }
  })

  const isAdmin = currentUser?.role === 'admin'
  const dose = useMemo(() => (selectedWeight * 0.01).toFixed(2).replace('.', ','), [selectedWeight])
  const favoriteItems = useMemo(() => {
    const catalog = [
      ...sopIndex.map((item) => ({ id: favoriteId('sop', item.title), type: 'SOP', title: `${item.label} ${item.title}`, subtitle: `Seite ${formatPages(item.pages)}`, screen: 'sops' })),
      ...nunAlgorithms.map((item) => ({
        id: favoriteId('nun', item.title),
        type: 'NUN',
        title: item.title,
        subtitle: item.subtitle,
        screen: item.title === 'Reanimation (Erwachsene)' ? 'algorithm' : 'nun',
      })),
      ...medicationData.map((item) => ({
        id: favoriteId('medication', item.name),
        type: 'Medikament',
        title: item.name,
        subtitle: item.group,
        screen: 'redList',
        medicationName: item.name,
      })),
    ]
    return favorites.map((id) => catalog.find((item) => item.id === id)).filter(Boolean)
  }, [favorites])

  useEffect(() => {
    window.localStorage.setItem('app2:favorites', JSON.stringify(favorites))
  }, [favorites])

  useEffect(() => {
    const timer = window.setTimeout(() => setShowSplash(false), 1800)
    return () => window.clearTimeout(timer)
  }, [])

  function isFavorite(id) {
    return favorites.includes(id)
  }

  function toggleFavorite(id) {
    setFavorites((current) => (current.includes(id) ? current.filter((item) => item !== id) : [...current, id]))
  }

  function openFavorite(item) {
    if (item.medicationName) {
      setActiveMedicationName(item.medicationName)
      setActiveScreen('redList')
      return
    }
    setActiveScreen(item.screen)
  }

  function handleLogin(event) {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    const email = data.get('email')?.trim().toLowerCase()
    const password = data.get('password')
    const user = USERS.find((candidate) => candidate.email === email && candidate.password === password)

    if (!user) {
      setLoginError('Zugangsdaten nicht gefunden.')
      return
    }

    setCurrentUser(user)
    setLoginError('')
    setActiveScreen('home')
  }

  function go(screen) {
    if (screen === 'admin' && !isAdmin) {
      setActiveScreen('more')
      return
    }
    setActiveScreen(screen)
    if (screen !== 'redList') {
      setActiveMedicationName(null)
    }
  }

  if (showSplash) {
    return <SplashScreen />
  }

  if (!currentUser) {
    return <LoginScreen onLogin={handleLogin} error={loginError} />
  }

  return (
    <main className="app-shell">
      <section className="phone-frame" aria-label="Rettungsdienst App 2.0">
        <div className="phone-screen">
          <DesktopSidebar active={activeScreen} go={go} user={currentUser} onLogout={() => setCurrentUser(null)} />
          <StatusBar />
          <div className="screen-body">
            {activeScreen === 'home' && <HomeScreen user={currentUser} go={go} />}
            {activeScreen === 'sops' && <SopsScreen go={go} isFavorite={isFavorite} toggleFavorite={toggleFavorite} />}
            {activeScreen === 'nun' && <NunScreen go={go} isFavorite={isFavorite} toggleFavorite={toggleFavorite} />}
            {activeScreen === 'algorithm' && <AlgorithmScreen go={go} isFavorite={isFavorite} toggleFavorite={toggleFavorite} />}
            {activeScreen === 'calculator' && (
              <CalculatorScreen go={go} weight={selectedWeight} setWeight={setSelectedWeight} dose={dose} />
            )}
            {activeScreen === 'redList' && (
              <RedListScreen
                go={go}
                isFavorite={isFavorite}
                toggleFavorite={toggleFavorite}
                initialMedicationName={activeMedicationName}
                clearInitialMedication={() => setActiveMedicationName(null)}
              />
            )}
            {activeScreen === 'schedule' && <ScheduleScreen go={go} />}
            {activeScreen === 'emergency' && <EmergencyContactsScreen go={go} />}
            {activeScreen === 'favorites' && (
              <FavoritesScreen
                go={go}
                favoriteItems={favoriteItems}
                openFavorite={openFavorite}
                toggleFavorite={toggleFavorite}
              />
            )}
            {activeScreen === 'more' && <MoreScreen user={currentUser} go={go} onLogout={() => setCurrentUser(null)} />}
            {activeScreen === 'admin' && <AdminScreen go={go} />}
          </div>
          <BottomNav active={activeScreen} go={go} />
        </div>
      </section>
    </main>
  )
}

function LoginScreen({ onLogin, error }) {
  return (
    <main className="login-page">
      <section className="login-phone">
        <div className="brand-mark">
          <BriefcaseMedical size={34} />
        </div>
        <h1>Deine Rettung.</h1>
        <p>GeschÃ¼tzter Zugriff fÃ¼r Retterinnen, Retter und Administration.</p>
        <form className="login-form" onSubmit={onLogin}>
          <label htmlFor="login-email">
            <span>E-Mail</span>
            <input id="login-email" name="email" type="email" defaultValue="retter@app.local" autoComplete="username" />
          </label>
          <label htmlFor="login-password">
            <span>Passwort</span>
            <input
              id="login-password"
              name="password"
              type="password"
              defaultValue="rettung2026"
              autoComplete="current-password"
            />
          </label>
          {error && <div className="form-error">{error}</div>}
          <button type="submit">
            <Lock size={18} />
            Einloggen
          </button>
        </form>
        <div className="login-access">
          <div>
            <KeyRound size={16} />
            User: retter@app.local / rettung2026
          </div>
          <div>
            <UserRoundCog size={16} />
            Admin: admin@app.local / admin2026
          </div>
        </div>
      </section>
    </main>
  )
}

function SplashScreen() {
  return (
    <main className="app-shell">
      <section className="phone-frame" aria-label="APP 2.0 Ladebildschirm">
        <div className="phone-screen splash-screen">
          <div className="splash-content">
            <strong>APP 2.0</strong>
            <span>Rettungsdienst</span>
          </div>
        </div>
      </section>
    </main>
  )
}

function StatusBar() {
  return (
    <div className="status-bar">
      <span>09:41</span>
      <span className="status-icons">â–° WiFi â–°</span>
    </div>
  )
}

function Header({ title, go, actions }) {
  return (
    <header className="screen-header">
      <button className="icon-button" type="button" onClick={() => go?.('home')} aria-label="ZurÃ¼ck">
        <ArrowLeft size={22} />
      </button>
      <h2>{title}</h2>
      <div className="header-actions">{actions}</div>
    </header>
  )
}

function HomeScreen({ user, go }) {
  return (
    <div className="screen-content">
      <div className="home-top">
        <div>
          <span>Guten Morgen,</span>
          <strong>{user.name}</strong>
        </div>
        <div className="home-actions">
          <Bell size={22} />
          <span className="badge">1</span>
          <CircleUserRound size={34} />
        </div>
      </div>

      <button className="next-shift" type="button" onClick={() => go('schedule')}>
        <span className="tile-icon blue">
          <CalendarDays size={28} />
        </span>
        <span>
          <small>NÃ¤chste Schicht</small>
          <strong>Heute, 07:00 - 19:00 Uhr</strong>
          <em>RTW 1 | {user.station === 'Systemverwaltung' ? 'Wache Mitte' : user.station}</em>
        </span>
      </button>

      <SectionTitle title="Schnellzugriff" action="Bearbeiten" />
      <div className="quick-grid">
        {quickActions.map((action) => {
          const Icon = action.icon
          return (
            <button key={action.id} type="button" className="quick-card" onClick={() => go(action.id)}>
              <Icon className={action.color} size={34} />
              <span>{action.label}</span>
            </button>
          )
        })}
      </div>
    </div>
  )
}

function SopsScreen({ go, isFavorite, toggleFavorite }) {
  const [query, setQuery] = useState('')
  const [selectedSop, setSelectedSop] = useState(null)
  const [currentPage, setCurrentPage] = useState(null)
  const [zoom, setZoom] = useState(100)
  const search = query.trim().toLowerCase()
  const filteredSections = sopSections
    .map((section) => ({
      ...section,
      entries: section.entries.filter((entry) => {
        const haystack = [entry.label, entry.title, entry.category, ...entry.keywords].join(' ').toLowerCase()
        return !search || haystack.includes(search)
      }),
    }))
    .filter((section) => section.entries.length > 0)

  function openSop(entry) {
    setSelectedSop(entry)
    setCurrentPage(entry.primaryPage)
    setZoom(100)
  }

  if (selectedSop) {
    return (
      <AlgorithmViewerScreen
        sop={selectedSop}
        page={currentPage}
        setPage={setCurrentPage}
        zoom={zoom}
        setZoom={setZoom}
        onBack={() => setSelectedSop(null)}
      />
    )
  }

  return (
    <div className="screen-content">
      <Header title="SOPs" go={go} actions={<span />} />
      <SearchField placeholder="Suche nach SOP, Nummer oder Stichwort" value={query} onChange={setQuery} />
      <div className="sop-overview-note">
        Versorgungspfad Schnellübersicht nach Original-PDF Seite 3. Die App zeigt keine nachgezeichneten SOP-Diagramme, sondern öffnet die Originalseiten.
      </div>
      <div className="sop-sections">
        {filteredSections.map((section) => (
          <section key={section.id} className="sop-section">
            <h3>{section.title}</h3>
            <div className="sop-card-grid">
              {section.entries.map((entry) => {
                const id = favoriteId('sop', entry.title)
                return (
                  <div key={entry.id} className="sop-card favorite-row">
                    <button type="button" className="sop-card-main" onClick={() => openSop(entry)}>
                      <span>{entry.label}</span>
                      <strong>{entry.title}</strong>
                      <em>{formatPages(entry.pages)}</em>
                    </button>
                    <FavoriteButton active={isFavorite(id)} onToggle={() => toggleFavorite(id)} />
                  </div>
                )
              })}
            </div>
          </section>
        ))}
        {filteredSections.length === 0 && <div className="empty-state">Kein SOP-Pfad gefunden.</div>}
      </div>
    </div>
  )
}

function AlgorithmViewerScreen({ sop, page, setPage, zoom, setZoom, onBack }) {
  const pageIndex = sop.pages.indexOf(page)
  const pdfUrl = `/${sop.pdfFile}#page=${page}&zoom=${zoom}`
  const canGoBack = pageIndex > 0
  const canGoForward = pageIndex < sop.pages.length - 1

  return (
    <div className="screen-content sop-viewer-screen">
      <Header title={`${sop.label} ${sop.title}`} go={onBack} actions={<FileText size={20} />} />
      <div className="sop-source">
        <strong>{sop.source}</strong>
        <span>{sop.version} · Stand {sop.lastUpdated}</span>
      </div>
      <div className="pdf-toolbar">
        <button type="button" disabled={!canGoBack} onClick={() => setPage(sop.pages[pageIndex - 1])}>Zurück</button>
        <span>Seite {page}</span>
        <button type="button" disabled={!canGoForward} onClick={() => setPage(sop.pages[pageIndex + 1])}>Weiter</button>
      </div>
      <div className="pdf-toolbar">
        <button type="button" onClick={() => setZoom(Math.max(60, zoom - 20))}>-</button>
        <span>{zoom}%</span>
        <button type="button" onClick={() => setZoom(Math.min(180, zoom + 20))}>+</button>
        <a href={pdfUrl} target="_blank" rel="noreferrer">Vollbild</a>
      </div>
      <div className="pdf-page-frame">
        <iframe title={`${sop.label} ${sop.title} Seite ${page}`} src={pdfUrl} />
      </div>
      <div className="pdf-missing-note">
        Original-PDF geladen aus <strong>{sop.pdfFile}</strong>. Die Ansicht ist scrollfähig, zoombar und über Vollbild separat öffnbar.
      </div>
    </div>
  )
}

function NunScreen({ go, isFavorite, toggleFavorite }) {
  return (
    <div className="screen-content">
      <Header title="NUN Algorithmen" go={go} actions={<span />} />
      <SearchField placeholder="Suche nach NUN Algorithmus" />
      <ChipRow items={['Alle', 'Reanimation', 'Trauma', 'Kardiologie', 'Neurologie']} />
      <div className="item-list">
        {nunAlgorithms.map((item) => {
          const Icon = item.icon
          const id = favoriteId('nun', item.title)
          return (
            <div key={item.title} className="list-row favorite-row">
              <button type="button" className="row-main" onClick={() => go('algorithm')}>
                <span className={`tile-icon ${item.color}`}>
                  <Icon size={22} />
                </span>
                <span>
                  <strong>{item.title}</strong>
                  <em>{item.subtitle}</em>
                </span>
                <ChevronRight size={20} />
              </button>
              <FavoriteButton active={isFavorite(id)} onToggle={() => toggleFavorite(id)} />
            </div>
          )
        })}
      </div>
    </div>
  )
}

function AlgorithmScreen({ go, isFavorite, toggleFavorite }) {
  const id = favoriteId('nun', 'Reanimation (Erwachsene)')

  return (
    <div className="screen-content algorithm-screen">
      <Header
        title="Reanimation (Erwachsene)"
        go={go}
        actions={<FavoriteButton active={isFavorite(id)} onToggle={() => toggleFavorite(id)} tone="orange" />}
      />
      <ChipRow items={['Algorithmus', 'Ablauf', 'MaÃŸnahmen', 'Medikamente']} />
      <div className="flowchart">
        {algorithmSteps.map(([label, tone]) => (
          <div key={label} className={`flow-box ${tone}`}>
            {label.split('\n').map((line) => (
              <span key={line}>{line}</span>
            ))}
          </div>
        ))}
        <div className="split-row">
          <div className="flow-box red">
            <span>Schockbar</span>
            <span>(VF / pVT)</span>
          </div>
          <div className="flow-box white">
            <span>Nicht schockbar</span>
            <span>(Asystolie / PEA)</span>
          </div>
        </div>
        <div className="split-row">
          <div className="flow-box red">
            <span>1 Schock</span>
            <span>200 J</span>
          </div>
          <div className="cycle">â†»</div>
        </div>
        <div className="split-row">
          <div className="flow-box small">
            <span>Sofort weiterfÃ¼hren:</span>
            <span>30:2 fÃ¼r 2 Minuten</span>
          </div>
          <div className="flow-box small">
            <span>Sofort weiterfÃ¼hren:</span>
            <span>30:2 fÃ¼r 2 Minuten</span>
          </div>
        </div>
      </div>
      <p className="source-note">Algorithmus nach ERC 2021 / NUN</p>
    </div>
  )
}

function CalculatorScreen({ go, weight, setWeight }) {
  const [activeTool, setActiveTool] = useState('medication')
  const [patientGroup, setPatientGroup] = useState('adult')
  const [ageYears, setAgeYears] = useState(40)
  const [ageMonths, setAgeMonths] = useState(0)
  const [selectedMedicationId, setSelectedMedicationId] = useState('adrenalin')
  const [selectedRuleId, setSelectedRuleId] = useState('adrenalin-cpr-adult-iv-io')
  const [rangeMode, setRangeMode] = useState('default')
  const [customConcentration, setCustomConcentration] = useState('1')

  const availableMedications = [...new Map(medicationCalculatorRules.map((rule) => [rule.medicationId, rule.name])).entries()]
  const medicationRules = medicationCalculatorRules.filter((rule) => rule.medicationId === selectedMedicationId)
  const selectedRule = medicationCalculatorRules.find((rule) => rule.id === selectedRuleId) || medicationRules[0]
  const concentration = selectedRule?.requiresConcentrationInput ? Number(customConcentration) : selectedRule?.concentrationMgPerMl
  const result = selectedRule
    ? calculateMedicationDose({ rule: selectedRule, weightKg: weight, ageYears, ageMonths, concentrationMgPerMl: concentration, rangeMode })
    : null

  function selectMedication(id) {
    const firstRule = medicationCalculatorRules.find((rule) => rule.medicationId === id)
    setSelectedMedicationId(id)
    setSelectedRuleId(firstRule.id)
    setPatientGroup(firstRule.patientGroup === 'child' ? 'child' : 'adult')
    setRangeMode('default')
    setCustomConcentration(firstRule.concentrationMgPerMl || '1')
  }

  function selectRule(id) {
    const nextRule = medicationCalculatorRules.find((rule) => rule.id === id)
    setSelectedRuleId(id)
    setPatientGroup(nextRule.patientGroup === 'child' ? 'child' : patientGroup)
    setRangeMode('default')
    setCustomConcentration(nextRule.concentrationMgPerMl || '1')
  }

  function resetCalculator() {
    setPatientGroup('adult')
    setAgeYears(40)
    setAgeMonths(0)
    setWeight(70)
    setSelectedMedicationId('adrenalin')
    setSelectedRuleId('adrenalin-cpr-adult-iv-io')
    setRangeMode('default')
    setCustomConcentration('1')
  }

  if (activeTool !== 'medication') {
    return (
      <div className="screen-content">
        <Header title={calculatorTools.find((tool) => tool.id === activeTool)?.label} go={go} actions={<Settings size={20} />} />
        <CalculatorToolGrid activeTool={activeTool} onSelect={setActiveTool} />
        <div className="calculator-status">
          <strong>Funktionsstatus</strong>
          <p>Dieser Rechnerbereich ist vorbereitet und öffnet bereits einen eigenen Screen. Die fachliche Rechenlogik wird datengetrieben ergänzt, sobald geprüfte Regeln vorliegen.</p>
          <button type="button" onClick={() => setActiveTool('medication')}>Zum Medikamentenrechner</button>
        </div>
      </div>
    )
  }

  return (
    <div className="screen-content">
      <Header title="Medikamentenrechner" go={go} actions={<Settings size={20} />} />
      <CalculatorToolGrid activeTool={activeTool} onSelect={setActiveTool} />
      <div className="calculator-safety">
        <strong>Berechnung ersetzt keine Prüfung der gültigen SOP/NUN und keine fachliche Verantwortung.</strong>
        <span>Vor Gabe: richtiger Patient, richtiges Medikament, richtige Dosis, richtiger Applikationsweg, richtige Zeit.</span>
        {patientGroup === 'child' && <b>Pädiatrische Dosierung prüfen.</b>}
      </div>
      <div className="calculator-form">
        <label>
          Patientengruppe
          <select value={patientGroup} onChange={(event) => setPatientGroup(event.target.value)}>
            <option value="adult">Erwachsener</option>
            <option value="child">Kind</option>
          </select>
        </label>
        <div className="calculator-grid">
          <label>Alter Jahre<input inputMode="numeric" value={ageYears} onChange={(event) => setAgeYears(Number(event.target.value))} /></label>
          <label>Monate<input inputMode="numeric" value={ageMonths} onChange={(event) => setAgeMonths(Number(event.target.value))} /></label>
          <label>Gewicht kg<input inputMode="decimal" value={weight} onChange={(event) => setWeight(Number(event.target.value))} /></label>
        </div>
        <label>
          Medikament
          <select value={selectedMedicationId} onChange={(event) => selectMedication(event.target.value)}>
            {availableMedications.map(([id, name]) => <option key={id} value={id}>{name}</option>)}
          </select>
        </label>
        <label>
          Indikation / Profil
          <select value={selectedRule.id} onChange={(event) => selectRule(event.target.value)}>
            {medicationRules.map((rule) => <option key={rule.id} value={rule.id}>{rule.indication} · {rule.route}</option>)}
          </select>
        </label>
        <label>Applikationsweg<input value={selectedRule.route} readOnly /></label>
        <label>
          Konzentration / Ampulle
          <input
            inputMode="decimal"
            value={selectedRule.requiresConcentrationInput ? customConcentration : selectedRule.concentrationLabel || selectedRule.concentrationMgPerMl || 'zu prüfen'}
            onChange={(event) => setCustomConcentration(event.target.value)}
            readOnly={!selectedRule.requiresConcentrationInput}
          />
        </label>
        {selectedRule.doseType === 'mg_per_kg_range' && (
          <div className="range-choice">
            {['min', 'default', 'max'].map((mode) => (
              <button key={mode} type="button" className={rangeMode === mode ? 'active' : ''} onClick={() => setRangeMode(mode)}>
                {mode === 'min' ? 'Min' : mode === 'max' ? 'Max' : 'Standard'}
              </button>
            ))}
          </div>
        )}
      </div>
      <div className={`dose-card ${result?.blocked ? 'blocked' : ''}`}>
        <span>Berechnung</span>
        <strong>{result?.blocked ? 'Zu prüfen' : result?.doseLabel}</strong>
        {result?.doseRange && <small>Dosisbereich: {formatNumber(result.doseRange.minMg)}-{formatNumber(result.doseRange.maxMg)} mg</small>}
        <div><span>Dosis</span><b>{result?.blocked ? '-' : `${formatNumber(result?.doseMg)} mg`}</b></div>
        <div><span>Volumen</span><b>{result?.volumeMl === null || result?.blocked ? '-' : `${formatNumber(result.volumeMl)} ml`}</b></div>
        <div><span>Konzentration</span><b>{selectedRule.concentrationLabel || (result?.concentrationMgPerMl ? `${formatNumber(result.concentrationMgPerMl)} mg/ml` : 'Eingabe nötig')}</b></div>
        <div><span>Maximaldosis</span><b>{selectedRule.maxDoseMg ? `${formatNumber(selectedRule.maxDoseMg)} mg` : '-'}</b></div>
        <hr />
        <span>Hinweise</span>
        {[...(result?.warnings || []), ...selectedRule.notes].map((note) => <small key={note}>{note}</small>)}
        <hr />
        <span>Quelle</span>
        <small>{selectedRule.source} · Version: {selectedRule.version}{selectedRule.sourcePage ? ` · Seite ${selectedRule.sourcePage}` : ''}</small>
      </div>
      <div className="calculator-actions">
        <button type="button" disabled={result?.blocked}>Berechnung übernehmen</button>
        <button type="button" onClick={resetCalculator}>Zurücksetzen</button>
      </div>
    </div>
  )
}

const calculatorTools = [
  { id: 'medication', label: 'Medikamentenrechner' },
  { id: 'child-dose', label: 'Kinderdosis' },
  { id: 'perfusor', label: 'Perfusor' },
  { id: 'gcs', label: 'GCS' },
  { id: 'news2', label: 'NEWS2' },
  { id: 'qsofa', label: 'qSOFA' },
  { id: 'bmi', label: 'BMI' },
  { id: 'burn', label: 'Verbrennung' },
]

function CalculatorToolGrid({ activeTool, onSelect }) {
  return (
    <div className="calculator-tool-grid">
      {calculatorTools.map((tool) => (
        <button key={tool.id} type="button" className={activeTool === tool.id ? 'active' : ''} onClick={() => onSelect(tool.id)}>
          {tool.label}
        </button>
      ))}
    </div>
  )
}
function RedListScreen({ go, isFavorite, toggleFavorite, initialMedicationName, clearInitialMedication }) {
  const [query, setQuery] = useState('')
  const [activeCategory, setActiveCategory] = useState('Alle')
  const [selectedMedication, setSelectedMedication] = useState(() => {
    if (!initialMedicationName) {
      return null
    }
    return medicationData.find((medication) => medication.name === initialMedicationName) ?? null
  })
  const fallbackMedications = medicines.map(([name, group]) => ({
    name,
    group,
    effect: 'Platzhalter',
    indications: 'Platzhalter',
    sideEffects: 'Platzhalter',
    contraindications: 'Platzhalter',
    appNote: 'SOP- und NUN-Verknuepfung spaeter ergaenzen.',
  }))
  const allMedications = medicationData.length > 0 ? medicationData : fallbackMedications
  const search = query.trim().toLowerCase()
  const filteredMedications = allMedications.filter((medication) => {
    const matchesCategory = medicationMatchesCategory(medication, activeCategory)
    const searchable = [
      medication.name,
      medication.group,
      medication.effect,
      medication.indications,
      medication.sideEffects,
      medication.contraindications,
      medication.category,
      medication.subcategory,
      medication.applicationRoutes,
      medication.specialNotes,
      medication.monitoring,
      medication.sopLink,
      medication.nunLink,
      medication.tags,
    ]
      .join(' ')
      .toLowerCase()
    return matchesCategory && searchable.includes(search)
  })

  if (selectedMedication) {
    return (
      <MedicationDetailScreen
        medication={selectedMedication}
        onBack={() => setSelectedMedication(null)}
        isFavorite={isFavorite}
        toggleFavorite={toggleFavorite}
      />
    )
  }

  return (
    <div className="screen-content">
      <Header title="Notfallmedikamente" go={go} actions={<span />} />
      <SearchField
        placeholder="Suche nach Medikament, Gruppe oder Indikation"
        value={query}
        onChange={setQuery}
      />
      <ChipRow
        items={['Alle', 'Analgetika', 'Sedativa', 'Katecholamine', 'Antidote']}
        activeItem={activeCategory}
        onSelect={setActiveCategory}
      />
      <div className="medicine-note">
        Lern- und Strukturhilfe. Vor Einsatz regionale SOPs und NUN beachten.
      </div>
      <div className="medicine-list">
        {filteredMedications.map((medication) => {
          const id = favoriteId('medication', medication.name)
          return (
            <div key={medication.name} className="medicine-row favorite-row">
              <button
                type="button"
                className="row-main"
                onClick={() => {
                  clearInitialMedication()
                  setSelectedMedication(medication)
                }}
              >
                <span className={`dot ${medicineColor(medication.group)}`} />
                <span>
                  <strong>{medication.name}</strong>
                  <em>{medication.group}</em>
                </span>
                <ChevronRight size={18} />
              </button>
              <FavoriteButton active={isFavorite(id)} onToggle={() => toggleFavorite(id)} />
            </div>
          )
        })}
        {filteredMedications.length === 0 && (
          <div className="empty-state">Kein Medikament gefunden.</div>
        )}
      </div>
      <button className="filter-button" type="button">
        <Filter size={18} />
        {filteredMedications.length}
      </button>
    </div>
  )
}

function medicationMatchesCategory(medication, category) {
  if (category === 'Alle') {
    return true
  }

  const group = medication.group.toLowerCase()
  const name = medication.name.toLowerCase()
  const effect = medication.effect.toLowerCase()
  const medCategory = medication.category?.toLowerCase() ?? ''
  const medSubcategory = medication.subcategory?.toLowerCase() ?? ''
  const tags = medication.tags?.toLowerCase() ?? ''

  if (category === 'Analgetika') {
    return (
      group.includes('analget') ||
      group.includes('opioid') ||
      group.includes('nichtopioid') ||
      group.includes('nsar') ||
      group.includes('dissoziativ') ||
      medCategory.includes('analgesie') ||
      medSubcategory.includes('opioid') ||
      tags.includes('schmerz') ||
      effect.includes('analgesie')
    )
  }

  if (category === 'Sedativa') {
    return (
      group.includes('benzodiazepin') ||
      group.includes('hypnotikum') ||
      group.includes('dissoziativ') ||
      tags.includes('sedierung') ||
      effect.includes('sedierung') ||
      name.includes('midazolam') ||
      name.includes('propofol') ||
      name.includes('etomidat')
    )
  }

  if (category === 'Katecholamine') {
    return group.includes('katecholamin') || group.includes('vasopressor') || group.includes('inotrop')
  }

  if (category === 'Antidote') {
    return group.includes('antidot')
  }

  return true
}

function MedicationDetailScreen({ medication, onBack, isFavorite, toggleFavorite }) {
  const id = favoriteId('medication', medication.name)
  const detailRows = [
    ['Gruppe', medication.group],
    ['Kategorie', medication.category],
    ['Unterkategorie', medication.subcategory],
    ['Wirkung', medication.effect],
    ['Indikationen', medication.indications],
    ['Nebenwirkungen', medication.sideEffects],
    ['Kontraindikationen', medication.contraindications],
    ['Applikationswege', medication.applicationRoutes],
    ['Besonderheiten', medication.specialNotes],
    ['Monitoring', medication.monitoring],
    ['SOP-Verknuepfung', medication.sopLink],
    ['NUN-Verknuepfung', medication.nunLink],
    ['APP 2.0 Tags', medication.tags],
    ['APP 2.0 Hinweis', medication.appNote],
  ].filter(([, value]) => Boolean(value))

  return (
    <div className="screen-content">
      <header className="screen-header">
        <button className="icon-button" type="button" onClick={onBack} aria-label="Zurueck zur Medikamentenliste">
          <ArrowLeft size={22} />
        </button>
        <h2>{medication.name}</h2>
        <div className="header-actions">
          <FavoriteButton active={isFavorite(id)} onToggle={() => toggleFavorite(id)} />
        </div>
      </header>
      <div className="medicine-detail-hero">
        <span className={`tile-icon ${medicineColor(medication.group)}`}>
          <ClipboardList size={24} />
        </span>
        <span>
          <strong>{medication.name}</strong>
          <em>{medication.group}</em>
        </span>
      </div>
      <div className="detail-list">
        {detailRows.map(([label, value]) => (
          <section key={label} className="detail-section">
            <h3>{label}</h3>
            <p>{value}</p>
          </section>
        ))}
      </div>
    </div>
  )
}

function medicineColor(group) {
  const normalized = group.toLowerCase()
  if (normalized.includes('katecholamin') || normalized.includes('vasopressor') || normalized.includes('inotrop')) {
    return 'yellow'
  }
  if (normalized.includes('opioid') || normalized.includes('analget') || normalized.includes('dissoziativ')) {
    return 'green'
  }
  if (normalized.includes('antiarrhythm') || normalized.includes('antikoagul') || normalized.includes('thrombo')) {
    return 'red'
  }
  if (normalized.includes('benzodiazepin') || normalized.includes('hypnotikum') || normalized.includes('antikonvuls')) {
    return 'violet'
  }
  if (normalized.includes('antidot') || normalized.includes('antiemetikum')) {
    return 'orange'
  }
  return 'blue'
}

function ScheduleScreen({ go }) {
  const [calendarView, setCalendarView] = useState('month')
  const [scheduleSection, setScheduleSection] = useState('calendar')
  const [selectedDate, setSelectedDate] = useState(`${defaultCalendarMonth}-15`)
  const [showAddShift, setShowAddShift] = useState(false)
  const [editingId, setEditingId] = useState(null)
  const [draftShift, setDraftShift] = useState(() => createDraftShift(`${defaultCalendarMonth}-15`))
  const [worktimeSettings, setWorktimeSettings] = useState(() => {
    try {
      const stored = window.localStorage.getItem(worktimeStorageKeys.settings)
      return stored ? { ...defaultWorktimeSettings, ...JSON.parse(stored) } : defaultWorktimeSettings
    } catch {
      return defaultWorktimeSettings
    }
  })
  const [plannedShifts, setPlannedShifts] = useState(() => {
    try {
      const stored = window.localStorage.getItem(worktimeStorageKeys.entries)
      if (stored) {
        return normalizeWorktimeEntries(JSON.parse(stored))
      }

      const legacyStored = window.localStorage.getItem('app2:shifts')
      if (legacyStored) {
        return normalizeWorktimeEntries(JSON.parse(legacyStored))
      }

      return normalizeWorktimeEntries(defaultScheduleEntries)
    } catch {
      return normalizeWorktimeEntries(defaultScheduleEntries)
    }
  })

  useEffect(() => {
    window.localStorage.setItem(worktimeStorageKeys.entries, JSON.stringify(plannedShifts))
  }, [plannedShifts])

  useEffect(() => {
    window.localStorage.setItem(worktimeStorageKeys.settings, JSON.stringify(worktimeSettings))
  }, [worktimeSettings])

  const calendarDays = useMemo(() => buildCalendarDays(worktimeSettings.month), [worktimeSettings.month])
  const summary = useMemo(() => summarizeWorktime(plannedShifts, worktimeSettings), [plannedShifts, worktimeSettings])
  const selectedDay = calendarDays.find((day) => day.date === selectedDate)
  const visibleShifts =
    calendarView === 'day' ? plannedShifts.filter((shift) => shift.date === selectedDate) : plannedShifts
  const colorByDate = plannedShifts.reduce((colors, shift) => {
    colors[shift.date] = shiftColor(shift)
    return colors
  }, {})

  function updateDraft(field, value) {
    setDraftShift((current) => {
      const next = { ...current, [field]: value }
      if (field === 'shiftType') {
        next.color = colorForShiftType(value)
      }
      return recalculateEntry(next)
    })
  }

  function updateSettings(field, value) {
    setWorktimeSettings((current) => ({ ...current, [field]: value }))
  }

  function openNewShift() {
    setScheduleSection('azk')
    setEditingId(null)
    setDraftShift(createDraftShift(selectedDate))
    setShowAddShift(true)
  }

  function openEditShift(shift) {
    setScheduleSection('azk')
    setEditingId(shift.id)
    setDraftShift({ ...shift })
    setShowAddShift(true)
  }

  function handleAddShift(event) {
    event.preventDefault()
    const preparedShift = recalculateEntry({
      ...draftShift,
      id: editingId || `shift-${draftShift.date}-${Date.now()}`,
      date: draftShift.date || selectedDate,
      breakMinutes: Number(draftShift.breakMinutes || 0),
      plannedHours: draftShift.plannedHours,
      countedHours: draftShift.countedHours,
      color: draftShift.color || colorForShiftType(draftShift.shiftType),
    })

    setPlannedShifts((current) =>
      editingId ? current.map((shift) => (shift.id === editingId ? preparedShift : shift)) : [...current, preparedShift],
    )
    setSelectedDate(preparedShift.date)
    setCalendarView('day')
    setShowAddShift(false)
    setEditingId(null)
  }

  return (
    <div className="screen-content">
      <Header
        title="Schichtplan"
        go={go}
        actions={
          <>
            <button
              className="icon-button"
              type="button"
              onClick={openNewShift}
              aria-label="Dienst hinzufuegen"
            >
              <Plus size={20} />
            </button>
            <MoreHorizontal size={20} />
          </>
        }
      />
      <div className="month-bar">
        <ChevronRight className="rotate" size={20} />
        <strong>{formatMonth(worktimeSettings.month)}</strong>
        <ChevronRight size={20} />
      </div>
      <div className="schedule-section-toggle" aria-label="Dienstplanbereich">
        <button
          type="button"
          className={scheduleSection === 'calendar' ? 'active' : ''}
          onClick={() => setScheduleSection('calendar')}
        >
          Kalender
        </button>
        <button
          type="button"
          className={scheduleSection === 'azk' ? 'active' : ''}
          onClick={() => setScheduleSection('azk')}
        >
          AZK
        </button>
      </div>
      {scheduleSection === 'azk' && (
        <section className="worktime-account">
          <div className="worktime-settings">
            <label>
              Monat
              <input value={worktimeSettings.month} onChange={(event) => updateSettings('month', event.target.value)} />
            </label>
            <label>
              Soll
              <input
                inputMode="decimal"
                value={worktimeSettings.monthlyTargetHours}
                onChange={(event) => updateSettings('monthlyTargetHours', event.target.value)}
              />
            </label>
            <label>
              Vortrag
              <input
                inputMode="decimal"
                value={worktimeSettings.totalCarryHours}
                onChange={(event) => updateSettings('totalCarryHours', event.target.value)}
              />
            </label>
          </div>
          <div className="worktime-summary">
            <SummaryTile label="Soll" value={`${formatHours(worktimeSettings.monthlyTargetHours)} h`} />
            <SummaryTile label="Ist" value={`${formatHours(summary.countedHours)} h`} />
            <SummaryTile label="Geplant" value={`${formatHours(summary.plannedHours)} h`} />
            <SummaryTile label="TatsÃ¤chlich" value={`${formatHours(summary.actualHours)} h`} />
            <SummaryTile label="Pause" value={`${formatHours(summary.breakHours)} h`} />
            <SummaryTile label="Saldo" value={`${formatHours(summary.monthBalance)} h`} tone={summary.monthBalance < 0 ? 'negative' : 'positive'} />
            <SummaryTile label="Gesamt" value={`${formatHours(summary.totalBalance)} h`} tone={summary.totalBalance < 0 ? 'negative' : 'positive'} />
            <SummaryTile label="Urlaub" value={summary.vacationDays} />
            <SummaryTile label="Krank" value={summary.sickDays} />
            <SummaryTile label="Fortbildung" value={summary.trainingDays} />
          </div>
          <button className="azk-add-button" type="button" onClick={openNewShift}>
            <Plus size={16} />
            Dienst im AZK erfassen
          </button>
        </section>
      )}
      <div className="schedule-view-toggle" aria-label="Kalenderansicht">
        <button
          type="button"
          className={calendarView === 'month' ? 'active' : ''}
          onClick={() => setCalendarView('month')}
        >
          Monat
        </button>
        <button
          type="button"
          className={calendarView === 'day' ? 'active' : ''}
          onClick={() => setCalendarView('day')}
        >
          Tag
        </button>
      </div>
      <div className="calendar-strip">
        {calendarDays.map((day) => (
          <button
            key={day.date}
            type="button"
            className={selectedDate === day.date ? 'active-day' : ''}
            onClick={() => {
              setSelectedDate(day.date)
              setCalendarView('day')
            }}
          >
            <span>{day.label}</span>
            <strong>{day.num}</strong>
            <i className={`${colorByDate[day.date] || day.marker}-bg`} />
          </button>
        ))}
      </div>
      {calendarView === 'day' && (
        <div className="day-summary">
          <span>Tagansicht</span>
          <strong>{selectedDay ? `${selectedDay.label}, ${selectedDay.num}. ${formatMonth(worktimeSettings.month)}` : formatDate(selectedDate)}</strong>
        </div>
      )}
      {showAddShift && scheduleSection === 'azk' && (
        <form className="shift-form" onSubmit={handleAddShift}>
          <strong>{editingId ? 'Dienst bearbeiten' : 'Dienst eintragen'}</strong>
          <label>
            Datum
            <input type="date" value={draftShift.date} onChange={(event) => updateDraft('date', event.target.value)} />
          </label>
          <div className="shift-form-grid">
            <label>
              Start
              <input type="time" value={draftShift.startTime} onChange={(event) => updateDraft('startTime', event.target.value)} />
            </label>
            <label>
              Ende
              <input type="time" value={draftShift.endTime} onChange={(event) => updateDraft('endTime', event.target.value)} />
            </label>
            <label>
              Pause
              <input
                inputMode="numeric"
                value={draftShift.breakMinutes}
                onChange={(event) => updateDraft('breakMinutes', event.target.value)}
              />
            </label>
          </div>
          <label>
            Diensttyp
            <select value={draftShift.shiftType} onChange={(event) => updateDraft('shiftType', event.target.value)}>
              {shiftTypes.map((type) => (
                <option key={type}>{type}</option>
              ))}
            </select>
          </label>
          <label>
            Standort / Wache
            <input value={draftShift.location} onChange={(event) => updateDraft('location', event.target.value)} />
          </label>
          <label>
            Notizen
            <input value={draftShift.notes} onChange={(event) => updateDraft('notes', event.target.value)} />
          </label>
          <label className="override-toggle">
            <input
              type="checkbox"
              checked={draftShift.manualOverride}
              onChange={(event) => updateDraft('manualOverride', event.target.checked)}
            />
            Berechnung manuell Ã¼berschreiben
          </label>
          <div className="worktime-calculation">
            <span>Geplant <b>{formatHours(draftShift.plannedHours)} h</b></span>
            <span>TatsÃ¤chlich <b>{formatHours(draftShift.actualHours)} h</b></span>
            <span>Pause <b>{formatHours(draftShift.breakHours)} h</b></span>
            <span>Gewertet <b>{formatHours(draftShift.countedHours)} h</b></span>
          </div>
          {draftShift.manualOverride && (
            <div className="shift-form-grid">
              <label>
                Geplant
                <input
                  inputMode="decimal"
                  value={draftShift.plannedHours}
                  onChange={(event) => updateDraft('plannedHours', event.target.value)}
                />
              </label>
              <label>
                TatsÃ¤chlich
                <input
                  inputMode="decimal"
                  value={draftShift.actualHours}
                  onChange={(event) => updateDraft('actualHours', event.target.value)}
                />
              </label>
              <label>
                Gewertet
                <input
                  inputMode="decimal"
                  value={draftShift.countedHours}
                  onChange={(event) => updateDraft('countedHours', event.target.value)}
                />
              </label>
            </div>
          )}
          <div className="shift-color-field">
            <span>Farbcodierung</span>
            <div className="shift-color-grid">
              {shiftColors.map((color) => (
                <button
                  key={color.id}
                  type="button"
                  className={draftShift.color === color.id ? 'active' : ''}
                  onClick={() => updateDraft('color', color.id)}
                  aria-label={`Farbe ${color.label}`}
                >
                  <i className={`${color.id}-bg`} />
                  {color.label}
                </button>
              ))}
            </div>
          </div>
          <div className="shift-form-actions">
            <button
              type="button"
              onClick={() => {
                setShowAddShift(false)
                setEditingId(null)
              }}
            >
              Abbrechen
            </button>
            <button type="submit">Speichern</button>
          </div>
        </form>
      )}
      <div className="shift-list">
        {visibleShifts.map((shift, index) => (
          <div key={`${shift.id}-${index}`} className="shift-block">
            <span>{formatDate(shift.date)}</span>
            <button type="button" className={`shift-${shiftColor(shift)}`} onClick={() => openEditShift(shift)}>
              <strong>{shiftTimeLabel(shift)}</strong>
              <em>{shift.location || 'Standort offen'}</em>
              {scheduleSection === 'azk' && (
                <small>{formatHours(shift.countedHours)} h gewertet Â· Pause {shift.breakMinutes || 0} min</small>
              )}
              <b className={`${shiftTypeClass(shift.shiftType)} ${shiftColor(shift)}-text`}>{shift.shiftType}</b>
            </button>
          </div>
        ))}
        {visibleShifts.length === 0 && <div className="empty-state">Fuer diesen Tag ist noch kein Dienst eingetragen.</div>}
      </div>
      <div className="legend">
        {shiftColors.map((color) => (
          <span key={color.id}>
            <i className={`${color.id}-bg`} />
            {color.label}
          </span>
        ))}
      </div>
      {scheduleSection === 'azk' && (
        <div className="future-tools">
          <span>Vorbereitet: PDF/CSV Export</span>
          <span>Backup / Sync</span>
          <span>Kalenderimport</span>
          <span>Dienstbeginn-Erinnerung</span>
        </div>
      )}
    </div>
  )
}

function shiftTypeClass(type) {
  if (type === 'Nachtdienst') {
    return 'night'
  }
  if (type === 'Frei' || type === '-') {
    return 'free'
  }
  return 'day'
}

function shiftColor(shift) {
  if (shift.color) {
    return shift.color
  }
  return colorForShiftType(shift.shiftType || shift.type)
}

function shiftTimeLabel(shift) {
  if (!shift.startTime && !shift.endTime) {
    return shift.shiftType
  }
  return `${shift.startTime || '--:--'} - ${shift.endTime || '--:--'}`
}

function SummaryTile({ label, value, tone = '' }) {
  return (
    <span className={tone}>
      <small>{label}</small>
      <strong>{value}</strong>
    </span>
  )
}

function buildCalendarDays(month) {
  const [year, monthNumber] = month.split('-').map(Number)
  const daysInMonth = new Date(year, monthNumber, 0).getDate()
  return Array.from({ length: daysInMonth }, (_, index) => {
    const day = index + 1
    const date = `${year}-${String(monthNumber).padStart(2, '0')}-${String(day).padStart(2, '0')}`
    const weekday = new Intl.DateTimeFormat('de-DE', { weekday: 'short' }).format(new Date(`${date}T12:00:00`))
    return { label: weekday.replace('.', ''), num: String(day), date, marker: 'green' }
  })
}

function formatMonth(month) {
  const [year, monthNumber] = month.split('-').map(Number)
  return new Intl.DateTimeFormat('de-DE', { month: 'long', year: 'numeric' }).format(new Date(year, monthNumber - 1, 1))
}

function formatDate(date) {
  return new Intl.DateTimeFormat('de-DE', {
    weekday: 'long',
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  }).format(new Date(`${date}T12:00:00`))
}

function EmergencyContactsScreen({ go }) {
  return (
    <div className="screen-content">
      <Header title="Notfallnummern" go={go} actions={<Phone size={20} />} />
      <div className="item-list">
        {contacts.map((contact) => (
          <a className="contact-row" key={contact.group} href={`tel:${contact.phone.replaceAll(' ', '')}`}>
            <span className="tile-icon yellow">
              <Phone size={20} />
            </span>
            <span>
              <small>{contact.group}</small>
              <strong>{contact.name}</strong>
              <em>{contact.phone}</em>
            </span>
          </a>
        ))}
      </div>
    </div>
  )
}

function FavoritesScreen({ go, favoriteItems, openFavorite, toggleFavorite }) {
  return (
    <div className="screen-content">
      <Header title="Favoriten" go={go} actions={<Star className="yellow" size={20} fill="currentColor" />} />
      <div className="list-card">
        {favoriteItems.map((item) => (
          <div key={item.id} className="favorite-card-row">
            <button type="button" onClick={() => openFavorite(item)}>
              <span>
                {item.title}
                <em>{item.type} Â· {item.subtitle}</em>
              </span>
            </button>
            <FavoriteButton active onToggle={() => toggleFavorite(item.id)} />
          </div>
        ))}
        {favoriteItems.length === 0 && <div className="empty-state">Noch keine Favoriten gespeichert.</div>}
      </div>
    </div>
  )
}

function MoreScreen({ user, go, onLogout }) {
  const entries = [
    ['schedule', 'Schichtplan', CalendarDays],
    ['emergency', 'Notfallnummern', Phone],
    ['favorites', 'Favoriten', Star],
    ['nun', 'NUN Algorithmen', Workflow],
    ['admin', 'Admin & Updates', ShieldCheck],
  ]
  return (
    <div className="screen-content">
      <Header title="Mehr" go={go} actions={<Menu size={20} />} />
      <div className="profile-card">
        <CircleUserRound size={36} />
        <span>
          <strong>{user.name}</strong>
          <em>{user.role === 'admin' ? 'Administrator' : 'Benutzer'}</em>
        </span>
      </div>
      <div className="item-list">
        {entries.map(([id, label, Icon]) => (
          <button key={id} type="button" className="list-row" onClick={() => go(id)}>
            <span className="tile-icon blue">
              <Icon size={20} />
            </span>
            <span><strong>{label}</strong></span>
            <ChevronRight size={20} />
          </button>
        ))}
      </div>
      <button className="logout-button" type="button" onClick={onLogout}>
        <LogOut size={18} />
        Abmelden
      </button>
    </div>
  )
}

function AdminScreen({ go }) {
  const modules = ['SOP / NUN Algorithmen', 'Medikamentenliste', 'Dienstplan-Regeln', 'Notfallkontakte', 'Benutzerverwaltung']
  return (
    <div className="screen-content">
      <Header title="Admin" go={go} actions={<ShieldCheck size={20} />} />
      <div className="admin-hero">
        <UserRoundCog size={34} />
        <span>
          <strong>Admin Zugriff aktiv</strong>
          <em>Bereit fÃ¼r spÃ¤tere Updates und ErgÃ¤nzungen.</em>
        </span>
      </div>
      <div className="item-list">
        {modules.map((module) => (
          <button key={module} type="button" className="list-row">
            <span className="tile-icon green">
              <Settings size={20} />
            </span>
            <span>
              <strong>{module}</strong>
              <em>Platzhalter fÃ¼r Bearbeitung</em>
            </span>
            <ChevronRight size={20} />
          </button>
        ))}
      </div>
    </div>
  )
}

function BottomNav({ active, go }) {
  return (
    <nav className="bottom-nav">
      {tabs.map((tab) => {
        const Icon = tab.icon
        const isActive = active === tab.id || (tab.id === 'nun' && active === 'algorithm')
        return (
          <button key={tab.id} type="button" className={isActive ? 'active' : ''} onClick={() => go(tab.id)}>
            <Icon size={20} />
            <span>{tab.label}</span>
          </button>
        )
      })}
    </nav>
  )
}

function DesktopSidebar({ active, go, user, onLogout }) {
  return (
    <aside className="desktop-sidebar" aria-label="Laptop Navigation">
      <div className="desktop-brand">
        <span className="brand-mark-small">
          <BriefcaseMedical size={22} />
        </span>
        <span>
          <strong>Rettung 2.0</strong>
          <em>{user.role === 'admin' ? 'Admin Demo' : 'User Demo'}</em>
        </span>
      </div>
      <nav className="desktop-nav">
        {desktopTabs.map((item) => {
          const Icon = item.icon
          const isActive = active === item.id || (item.id === 'sops' && active === 'algorithm')
          return (
            <button key={item.id} type="button" className={isActive ? 'active' : ''} onClick={() => go(item.id)}>
              <Icon size={18} />
              <span>{item.label}</span>
            </button>
          )
        })}
      </nav>
      <div className="desktop-user">
        <CircleUserRound size={30} />
        <span>
          <strong>{user.name}</strong>
          <em>{user.station}</em>
        </span>
      </div>
      <button className="desktop-logout" type="button" onClick={onLogout}>
        <LogOut size={17} />
        Abmelden
      </button>
    </aside>
  )
}

function FavoriteButton({ active, onToggle, tone = 'yellow' }) {
  return (
    <button
      type="button"
      className={`favorite-button ${active ? 'active' : ''} ${tone}`}
      onClick={onToggle}
      aria-label={active ? 'Aus Favoriten entfernen' : 'Zu Favoriten hinzufuegen'}
    >
      <Star size={20} fill={active ? 'currentColor' : 'none'} />
    </button>
  )
}

function SectionTitle({ title, action }) {
  return (
    <div className="section-title">
      <h3>{title}</h3>
      <button type="button">{action}</button>
    </div>
  )
}

function SearchField({ placeholder, value, onChange }) {
  const inputProps =
    value === undefined
      ? {}
      : {
          value,
          onChange: (event) => onChange?.(event.target.value),
        }

  return (
    <label className="search-field">
      <Search size={18} />
      <input placeholder={placeholder} {...inputProps} />
    </label>
  )
}

function ChipRow({ items, activeItem, onSelect }) {
  return (
    <div className="chip-row">
      {items.map((item, index) => (
        <button
          key={item}
          type="button"
          className={(activeItem ?? items[0]) === item || (!activeItem && index === 0) ? 'active' : ''}
          onClick={() => onSelect?.(item)}
        >
          {item}
        </button>
      ))}
    </div>
  )
}

export default App
