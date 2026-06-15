import { useEffect, useMemo, useState } from 'react'
import {
  AlertTriangle,
  ArrowLeft,
  Bell,
  BriefcaseMedical,
  CalendarDays,
  Calculator,
  ChevronDown,
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

const sops = [
  { title: 'Atemwegsmanagement', subtitle: 'SOP Platzhalter', icon: BriefcaseMedical, color: 'blue' },
  { title: 'i.v. Zugang / i.o. Zugang', subtitle: 'SOP Platzhalter', icon: Stethoscope, color: 'green' },
  { title: 'Schmerztherapie', subtitle: 'SOP Platzhalter', icon: HeartPulse, color: 'red' },
  { title: 'Traumaversorgung', subtitle: 'SOP Platzhalter', icon: AlertTriangle, color: 'orange' },
  { title: 'Hygiene & Desinfektion', subtitle: 'SOP Platzhalter', icon: ShieldCheck, color: 'violet' },
  { title: 'Dokumentation & Übergabe', subtitle: 'SOP Platzhalter', icon: ClipboardList, color: 'blue' },
]

const nunAlgorithms = [
  { title: 'Reanimation (Erwachsene)', subtitle: 'NUN / ERC 2021', icon: Workflow, color: 'blue' },
  { title: 'Reanimation (Kind)', subtitle: 'NUN / ERC 2021', icon: Workflow, color: 'blue' },
  { title: 'ACS (STEMI / NSTEMI)', subtitle: 'NUN Algorithmus', icon: HeartPulse, color: 'red' },
  { title: 'Schlaganfall (Stroke)', subtitle: 'NUN Algorithmus', icon: Stethoscope, color: 'violet' },
  { title: 'Anaphylaxie', subtitle: 'NUN Algorithmus', icon: AlertTriangle, color: 'orange' },
  { title: 'Sepsis', subtitle: 'NUN Algorithmus', icon: HeartPulse, color: 'green' },
  { title: 'Hypoglykämie', subtitle: 'NUN Algorithmus', icon: Calculator, color: 'green' },
  { title: 'Krampfanfall', subtitle: 'NUN Algorithmus', icon: AlertTriangle, color: 'violet' },
]

const medicines = [
  ['Adrenalin', 'Katecholamin', 'yellow'],
  ['Amiodaron', 'Antiarrhythmikum', 'red'],
  ['ASS (Acetylsalicylsäure)', 'Thrombozytenaggregationshemmer', 'green'],
  ['Atropin', 'Parasympatholytikum', 'green'],
  ['Clopidogrel', 'Thrombozytenaggregationshemmer', 'red'],
  ['Dexamethason', 'Kortikosteroid', 'green'],
  ['Diazepam', 'Benzodiazepin', 'orange'],
  ['Dobutamin', 'Katecholamin', 'green'],
  ['Epinephrin', 'Katecholamin', 'yellow'],
]

const shifts = [
  { date: 'Donnerstag, 16. Mai 2024', time: '07:00 - 19:00', detail: 'RTW 1 | Wache Mitte', type: 'Frühdienst' },
  { date: 'Freitag, 17. Mai 2024', time: '19:00 - 07:00', detail: 'NEF | Wache Mitte', type: 'Nachtdienst' },
  { date: 'Samstag, 18. Mai 2024', time: 'Frei', detail: '', type: '-' },
  { date: 'Sonntag, 19. Mai 2024', time: '07:00 - 19:00', detail: 'RTW 2 | Wache West', type: 'Frühdienst' },
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
  ['AED anschließen\nRhythmusanalyse', 'white'],
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

function App() {
  const [currentUser, setCurrentUser] = useState(null)
  const [loginError, setLoginError] = useState('')
  const [activeScreen, setActiveScreen] = useState('home')
  const [selectedWeight, setSelectedWeight] = useState(70)
  const [activeMedicationName, setActiveMedicationName] = useState(null)
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
      ...sops.map((item) => ({ id: favoriteId('sop', item.title), type: 'SOP', title: item.title, subtitle: item.subtitle, screen: 'sops' })),
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
        <p>Geschützter Zugriff für Retterinnen, Retter und Administration.</p>
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

function StatusBar() {
  return (
    <div className="status-bar">
      <span>09:41</span>
      <span className="status-icons">▰ WiFi ▰</span>
    </div>
  )
}

function Header({ title, go, actions }) {
  return (
    <header className="screen-header">
      <button className="icon-button" type="button" onClick={() => go?.('home')} aria-label="Zurück">
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
          <small>Nächste Schicht</small>
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
  return (
    <div className="screen-content">
      <Header title="SOPs" go={go} actions={<span />} />
      <SearchField placeholder="Suche nach SOP" />
      <ChipRow items={['Alle', 'Atemweg', 'Trauma', 'Medikation', 'Dokumentation']} />
      <div className="item-list">
        {sops.map((item) => {
          const Icon = item.icon
          const id = favoriteId('sop', item.title)
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
      <ChipRow items={['Algorithmus', 'Ablauf', 'Maßnahmen', 'Medikamente']} />
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
          <div className="cycle">↻</div>
        </div>
        <div className="split-row">
          <div className="flow-box small">
            <span>Sofort weiterführen:</span>
            <span>30:2 für 2 Minuten</span>
          </div>
          <div className="flow-box small">
            <span>Sofort weiterführen:</span>
            <span>30:2 für 2 Minuten</span>
          </div>
        </div>
      </div>
      <p className="source-note">Algorithmus nach ERC 2021 / NUN</p>
    </div>
  )
}

function CalculatorScreen({ go, weight, setWeight, dose }) {
  return (
    <div className="screen-content">
      <Header title="Medikamentenrechner" go={go} actions={<Settings size={20} />} />
      <SegmentedControl items={['Gewicht', 'Alter', 'BSA']} />
      <div className="calc-panel">
        <label>Patientengewicht</label>
        <div className="weight-readout">
          <strong>{weight}</strong>
          <span>kg</span>
        </div>
        <div className="stepper">
          <button type="button" onClick={() => setWeight(Math.max(1, weight - 5))}>−</button>
          <button type="button" onClick={() => setWeight(weight + 5)}>+</button>
        </div>
      </div>
      <label className="field-label">
        Medikament wählen
        <button className="select-like" type="button">
          Adrenalin (1 mg/ml)
          <ChevronDown size={18} />
        </button>
      </label>
      <div className="dose-card">
        <span>Berechnung</span>
        <strong>0,01 mg / kg</strong>
        <div>
          <span>Einzeldosis</span>
          <b>{dose} mg</b>
        </div>
        <em>= {dose} ml</em>
        <hr />
        <span>Standardverdünnung</span>
        <small>1 mg in 10 ml (1:10.000)</small>
      </div>
      <div className="result-dose">
        <span>Gabe</span>
        <strong>{dose} ml i.v.</strong>
      </div>
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
  return (
    <div className="screen-content">
      <Header title="Schichtplan" go={go} actions={<><Plus size={20} /><MoreHorizontal size={20} /></>} />
      <div className="month-bar">
        <ChevronRight className="rotate" size={20} />
        <strong>Mai 2024</strong>
        <ChevronRight size={20} />
      </div>
      <div className="calendar-strip">
        {['Mo\n13', 'Di\n14', 'Mi\n15', 'Do\n16', 'Fr\n17', 'Sa\n18', 'So\n19'].map((day) => {
          const [label, num] = day.split('\n')
          return (
            <div key={day} className={num === '16' ? 'active-day' : ''}>
              <span>{label}</span>
              <strong>{num}</strong>
              <i />
            </div>
          )
        })}
      </div>
      <div className="shift-list">
        {shifts.map((shift) => (
          <div key={shift.date} className="shift-block">
            <span>{shift.date}</span>
            <button type="button">
              <strong>{shift.time}</strong>
              {shift.detail && <em>{shift.detail}</em>}
              <b>{shift.type}</b>
            </button>
          </div>
        ))}
      </div>
      <div className="legend">
        <span><i className="green-bg" />Frühdienst</span>
        <span><i className="orange-bg" />Spätdienst</span>
        <span><i className="blue-bg" />Nachtdienst</span>
        <span><i className="gray-bg" />Frei</span>
      </div>
    </div>
  )
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
                <em>{item.type} · {item.subtitle}</em>
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
          <em>Bereit für spätere Updates und Ergänzungen.</em>
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
              <em>Platzhalter für Bearbeitung</em>
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

function SegmentedControl({ items }) {
  return (
    <div className="segmented-control">
      {items.map((item, index) => (
        <button key={item} type="button" className={index === 0 ? 'active' : ''}>
          {item}
        </button>
      ))}
    </div>
  )
}

export default App
