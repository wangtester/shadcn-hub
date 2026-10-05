import fs from 'fs';

let content = fs.readFileSync('src/components/registry-live-preview.tsx', 'utf8');

// 1. Add switch cases for shadcn-io
const switchCases = `
    // shadcn.io Extra Blocks
    case "shadcnio-access-tokens":
      return <ShadcnIoAccessTokensDemo />;
    case "shadcnio-kanban":
      return <ShadcnIoKanbanDemo />;
    case "shadcnio-stats-streak":
      return <ShadcnIoStatsStreakDemo />;
    case "shadcnio-achievement":
      return <ShadcnIoAchievementDemo />;
    case "shadcnio-crud-rbac":
      return <ShadcnIoCrudRbacDemo />;
    case "shadcnio-agenda":
      return <ShadcnIoAgendaDemo />;
    case "shadcnio-empty-tools":
      return <ShadcnIoEmptyToolsDemo />;
    case "shadcnio-upload-3d":
      return <ShadcnIoUpload3DDemo />;
    case "shadcnio-command-accounts":
      return <ShadcnIoCommandAccountsDemo />;
    case "shadcnio-ab-testing":
      return <ShadcnIoAbTestingDemo />;
    case "shadcnio-billing-alert":
      return <ShadcnIoBillingAlertDemo />;
    case "shadcnio-admin-navbar":
      return <ShadcnIoAdminNavbarDemo />;
    case "shadcnio-locked-login":
      return <ShadcnIoLockedLoginDemo />;
    case "shadcnio-reframe-template":
      return <ShadcnIoReframeDemo />;
`;

content = content.replace('    default:', switchCases + '\n    default:');

// 2. Add component implementations at the end
const componentDemos = `
/* ========================================================================= */
/* shadcn.io Rich Interactive Blocks (14 New Blocks)                         */
/* ========================================================================= */

function ShadcnIoAccessTokensDemo() {
  const [token, setToken] = useState("sk_live_94f8a12bc09e88d");
  const [copied, setCopied] = useState(false);
  const [perm, setPerm] = useState<"read" | "write">("write");

  const generateNew = () => {
    const rand = Math.random().toString(36).substring(2, 12);
    setToken("sk_live_" + rand);
  };

  return (
    <div className="p-4 rounded-xl border bg-card text-xs space-y-3">
      <div className="flex items-center justify-between">
        <div>
          <h4 className="font-bold text-foreground">API Access Tokens</h4>
          <p className="text-[10px] text-muted-foreground">Manage service authentication keys</p>
        </div>
        <Button size="sm" variant="outline" className="h-6 text-[10px]" onClick={generateNew}>
          Rotate Secret
        </Button>
      </div>
      <div className="flex items-center justify-between p-2 rounded-lg bg-muted/40 font-mono text-[11px] border">
        <span className="truncate">{token}</span>
        <button
          onClick={() => {
            navigator.clipboard?.writeText(token);
            setCopied(true);
            setTimeout(() => setCopied(false), 1200);
          }}
          className="text-muted-foreground hover:text-foreground p-1 shrink-0 ml-2"
        >
          {copied ? <Check className="h-3.5 w-3.5 text-emerald-500" /> : <Copy className="h-3.5 w-3.5" />}
        </button>
      </div>
      <div className="flex items-center justify-between text-[11px]">
        <span className="text-muted-foreground">Scope Permission:</span>
        <div className="flex gap-1">
          <button
            onClick={() => setPerm("read")}
            className={\`px-2 py-0.5 rounded text-[10px] font-mono \${perm === "read" ? "bg-primary text-primary-foreground font-bold" : "bg-muted text-muted-foreground"}\`}
          >
            Read Only
          </button>
          <button
            onClick={() => setPerm("write")}
            className={\`px-2 py-0.5 rounded text-[10px] font-mono \${perm === "write" ? "bg-primary text-primary-foreground font-bold" : "bg-muted text-muted-foreground"}\`}
          >
            Read & Write
          </button>
        </div>
      </div>
    </div>
  );
}

function ShadcnIoKanbanDemo() {
  const [tasks, setTasks] = useState([
    { id: 1, title: "Auth 2FA Setup", col: "progress" },
    { id: 2, title: "Stripe Webhook", col: "todo" },
    { id: 3, title: "Docker Deploy", col: "done" },
  ]);

  const moveTask = (id: number) => {
    setTasks(tasks.map(t => {
      if (t.id === id) {
        const nextCol = t.col === "todo" ? "progress" : t.col === "progress" ? "done" : "todo";
        return { ...t, col: nextCol };
      }
      return t;
    }));
  };

  return (
    <div className="p-3 rounded-xl border bg-card text-xs space-y-2">
      <div className="flex justify-between items-center pb-1 border-b">
        <span className="font-bold">Agent Task Pipeline</span>
        <span className="text-[10px] text-muted-foreground font-mono">Click card to advance</span>
      </div>
      <div className="grid grid-cols-3 gap-1.5 text-[10px]">
        {["todo", "progress", "done"].map(colName => (
          <div key={colName} className="p-1.5 rounded-lg bg-muted/30 border space-y-1">
            <span className="font-mono uppercase text-[9px] text-muted-foreground block">
              {colName}
            </span>
            {tasks.filter(t => t.col === colName).map(task => (
              <div
                key={task.id}
                onClick={() => moveTask(task.id)}
                className="p-1.5 rounded bg-background border shadow-2xs cursor-pointer hover:border-primary/50 text-[10px] font-medium"
              >
                {task.title}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

function ShadcnIoStatsStreakDemo() {
  const [streak, setStreak] = useState(42);
  const [checked, setChecked] = useState(false);

  const toggleCheck = () => {
    if (!checked) {
      setStreak(s => s + 1);
      setChecked(true);
    } else {
      setStreak(s => s - 1);
      setChecked(false);
    }
  };

  return (
    <div className="p-4 rounded-xl border bg-card text-xs space-y-3">
      <div className="flex items-center justify-between">
        <div>
          <span className="text-[10px] text-muted-foreground uppercase font-mono">Consistency Engine</span>
          <div className="flex items-baseline gap-1.5">
            <Flame className="h-4 w-4 text-orange-500 fill-orange-500" />
            <span className="text-xl font-black font-mono text-foreground">{streak} Days</span>
          </div>
        </div>
        <Button
          size="sm"
          variant={checked ? "secondary" : "default"}
          className="h-7 text-xs"
          onClick={toggleCheck}
        >
          {checked ? "Done Today ✓" : "Check In Today"}
        </Button>
      </div>
      <div className="flex justify-between gap-1 pt-1 border-t">
        {["M", "T", "W", "T", "F", "S", "S"].map((d, i) => (
          <div key={i} className="text-center space-y-1">
            <span className="text-[9px] text-muted-foreground">{d}</span>
            <div className={\`w-6 h-6 rounded-md flex items-center justify-center font-mono text-[10px] \${
              i < 5 || checked ? "bg-orange-500/20 text-orange-600 font-bold border border-orange-500/30" : "bg-muted text-muted-foreground"
            }\`}>
              {i < 5 || checked ? "✓" : ""}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function ShadcnIoAchievementDemo() {
  const [claimed, setClaimed] = useState(false);
  return (
    <div className="p-4 rounded-xl border bg-gradient-to-br from-amber-500/10 via-card to-card text-xs space-y-2.5 text-center">
      <div className="w-12 h-12 rounded-full bg-amber-500/20 text-amber-500 mx-auto flex items-center justify-center shadow-lg border border-amber-500/30">
        <Star className="h-6 w-6 fill-amber-400" />
      </div>
      <div>
        <h4 className="font-bold text-sm text-foreground">Unicorn Scaler Unlocked</h4>
        <p className="text-[11px] text-muted-foreground">Processed over 1,000,000 production API requests.</p>
      </div>
      <Button
        size="sm"
        disabled={claimed}
        onClick={() => setClaimed(true)}
        className="h-7 text-xs bg-amber-500 hover:bg-amber-600 text-black font-semibold"
      >
        {claimed ? "Reward Claimed ✓" : "Claim Collector Badge"}
      </Button>
    </div>
  );
}

function ShadcnIoCrudRbacDemo() {
  const [perms, setPerms] = useState({
    admin: { read: true, write: true, delete: true },
    editor: { read: true, write: true, delete: false },
    guest: { read: true, write: false, delete: false },
  });

  const toggle = (role: 'admin' | 'editor' | 'guest', act: 'read' | 'write' | 'delete') => {
    setPerms(prev => ({
      ...prev,
      [role]: { ...prev[role], [act]: !prev[role][act] }
    }));
  };

  return (
    <div className="p-3 rounded-xl border bg-card text-xs space-y-2">
      <span className="font-bold text-foreground">Role-Based Access Control</span>
      <table className="w-full text-left text-[11px]">
        <thead className="bg-muted/40 border-b text-[10px] text-muted-foreground">
          <tr>
            <th className="p-1">Role</th>
            <th className="p-1 text-center">Read</th>
            <th className="p-1 text-center">Write</th>
            <th className="p-1 text-center">Delete</th>
          </tr>
        </thead>
        <tbody>
          {(['admin', 'editor', 'guest'] as const).map(role => (
            <tr key={role} className="border-b last:border-0 hover:bg-muted/20">
              <td className="p-1 font-mono capitalize font-medium">{role}</td>
              <td className="p-1 text-center">
                <input
                  type="checkbox"
                  checked={perms[role].read}
                  onChange={() => toggle(role, 'read')}
                  className="rounded cursor-pointer"
                />
              </td>
              <td className="p-1 text-center">
                <input
                  type="checkbox"
                  checked={perms[role].write}
                  onChange={() => toggle(role, 'write')}
                  className="rounded cursor-pointer"
                />
              </td>
              <td className="p-1 text-center">
                <input
                  type="checkbox"
                  checked={perms[role].delete}
                  onChange={() => toggle(role, 'delete')}
                  className="rounded cursor-pointer"
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function ShadcnIoAgendaDemo() {
  return (
    <div className="p-3 rounded-xl border bg-card text-xs space-y-2">
      <div className="flex justify-between items-center pb-1 border-b">
        <span className="font-bold flex items-center gap-1.5">
          <CalendarIcon className="h-3.5 w-3.5 text-blue-500" /> Today&#39;s Team Agenda
        </span>
        <Badge variant="outline" className="text-[9px] font-mono">3 Meetings</Badge>
      </div>
      <div className="space-y-1.5">
        <div className="p-1.5 rounded-lg border bg-blue-500/5 border-blue-500/30 flex items-center justify-between">
          <div>
            <div className="font-semibold text-foreground">Sprint 24 Standup</div>
            <div className="text-[10px] text-muted-foreground font-mono">10:00 AM - 10:30 AM</div>
          </div>
          <Button size="sm" className="h-6 text-[10px] px-2 bg-blue-600 hover:bg-blue-700 text-white">
            Join
          </Button>
        </div>
        <div className="p-1.5 rounded-lg border bg-muted/20 flex items-center justify-between">
          <div>
            <div className="font-semibold text-foreground">Architecture Review</div>
            <div className="text-[10px] text-muted-foreground font-mono">02:00 PM - 03:00 PM</div>
          </div>
          <Badge variant="secondary" className="text-[9px]">Upcoming</Badge>
        </div>
      </div>
    </div>
  );
}

function ShadcnIoEmptyToolsDemo() {
  const [connected, setConnected] = useState<Record<string, boolean>>({
    github: true,
    slack: false,
    figma: false,
  });

  const toggle = (k: string) => {
    setConnected(prev => ({ ...prev, [k]: !prev[k] }));
  };

  return (
    <div className="p-4 rounded-xl border bg-muted/20 text-center text-xs space-y-3">
      <div className="w-10 h-10 rounded-full bg-card border flex items-center justify-center mx-auto text-muted-foreground shadow-xs">
        <Globe className="h-5 w-5" />
      </div>
      <div>
        <h4 className="font-bold text-foreground">Connect Third-party Integrations</h4>
        <p className="text-[10px] text-muted-foreground">Sync your workflows automatically</p>
      </div>
      <div className="flex justify-center gap-2">
        {['github', 'slack', 'figma'].map(t => (
          <Button
            key={t}
            size="sm"
            variant={connected[t] ? "secondary" : "outline"}
            className="h-6 text-[10px] capitalize"
            onClick={() => toggle(t)}
          >
            {t} {connected[t] ? "✓" : "+"}
          </Button>
        ))}
      </div>
    </div>
  );
}

function ShadcnIoUpload3DDemo() {
  return (
    <div className="p-4 rounded-xl border-2 border-dashed border-primary/30 hover:border-primary/60 bg-card text-center text-xs space-y-2 cursor-pointer transition-colors">
      <Box className="h-7 w-7 text-primary mx-auto animate-bounce" />
      <div>
        <p className="font-bold text-foreground">Drop .GLTF or .OBJ Models Here</p>
        <p className="text-[10px] text-muted-foreground">Automatic polygon count & mesh verification</p>
      </div>
      <Badge variant="outline" className="font-mono text-[9px]">Max File Size: 100MB</Badge>
    </div>
  );
}

function ShadcnIoCommandAccountsDemo() {
  const [activeOrg, setActiveOrg] = useState("Acme Global");
  const orgs = ["Acme Global", "Personal Project", "Studio Engineering"];

  return (
    <div className="p-3 rounded-xl border bg-card text-xs space-y-2">
      <div className="flex items-center justify-between pb-1 border-b">
        <span className="font-bold text-foreground">Organization Switcher</span>
        <Badge variant="outline" className="font-mono text-[9px]">⌘K</Badge>
      </div>
      <div className="space-y-1">
        {orgs.map(org => (
          <div
            key={org}
            onClick={() => setActiveOrg(org)}
            className={\`p-2 rounded-lg border flex items-center justify-between cursor-pointer transition-all \${
              activeOrg === org ? "bg-primary/10 border-primary/40 font-bold" : "hover:bg-muted/40"
            }\`}
          >
            <span>{org}</span>
            {activeOrg === org && <Check className="h-3.5 w-3.5 text-primary" />}
          </div>
        ))}
      </div>
    </div>
  );
}

function ShadcnIoAbTestingDemo() {
  return (
    <div className="p-3 rounded-xl border bg-card text-xs space-y-2.5">
      <div className="flex justify-between items-center">
        <span className="font-bold text-foreground">Landing CTA A/B Experiment</span>
        <Badge className="bg-emerald-500/10 text-emerald-600 border-emerald-500/30 text-[9px] font-mono">
          Variant B Winner (+46%)
        </Badge>
      </div>
      <div className="space-y-2">
        <div>
          <div className="flex justify-between text-[10px] text-muted-foreground mb-0.5">
            <span>Variant A (Original Button)</span>
            <span className="font-mono">12.4% Conv</span>
          </div>
          <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
            <div className="h-full bg-muted-foreground/60 w-[42%]" />
          </div>
        </div>
        <div>
          <div className="flex justify-between text-[10px] text-muted-foreground mb-0.5">
            <span className="font-semibold text-emerald-600">Variant B (Gradient Shimmer)</span>
            <span className="font-mono font-bold text-emerald-600">18.2% Conv</span>
          </div>
          <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
            <div className="h-full bg-emerald-500 w-[68%]" />
          </div>
        </div>
      </div>
    </div>
  );
}

function ShadcnIoBillingAlertDemo() {
  const [dismissed, setDismissed] = useState(false);
  if (dismissed) {
    return (
      <div className="p-4 rounded-xl border bg-card text-center text-xs">
        <Button size="sm" variant="outline" className="h-7 text-xs" onClick={() => setDismissed(false)}>
          Reset Checkout Reminder
        </Button>
      </div>
    );
  }

  return (
    <div className="p-3.5 rounded-xl border bg-gradient-to-r from-amber-500/10 via-background to-card text-xs space-y-2">
      <div className="flex items-center justify-between">
        <span className="font-bold flex items-center gap-1.5 text-amber-600">
          <Clock className="h-3.5 w-3.5" /> Cart Reserved for 04:59
        </span>
        <button onClick={() => setDismissed(true)} className="text-muted-foreground hover:text-foreground">
          ✕
        </button>
      </div>
      <p className="text-[11px] text-muted-foreground">
        Use code <code className="bg-amber-500/20 px-1 py-0.5 rounded font-mono text-amber-700 dark:text-amber-300 font-bold">SAVE10</code> at checkout to claim 10% off your annual subscription.
      </p>
      <Button size="sm" className="h-7 text-xs bg-amber-600 hover:bg-amber-700 text-white w-full">
        Complete Checkout ($171/yr)
      </Button>
    </div>
  );
}

function ShadcnIoAdminNavbarDemo() {
  return (
    <div className="p-3 rounded-xl border bg-card text-xs space-y-2">
      <div className="flex items-center justify-between p-2 rounded-lg border bg-muted/40">
        <div className="flex items-center gap-2">
          <span className="font-black text-xs text-foreground">SHADCN/ADMIN</span>
          <Badge className="bg-emerald-500/20 text-emerald-600 border-emerald-500/30 text-[9px] font-mono">
            PROD
          </Badge>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-[10px] text-muted-foreground font-mono">us-east-1 (ok)</span>
        </div>
      </div>
    </div>
  );
}

function ShadcnIoLockedLoginDemo() {
  const [emailSent, setEmailSent] = useState(false);
  return (
    <div className="p-4 rounded-xl border bg-red-500/5 border-red-500/30 text-xs space-y-2.5 text-center">
      <Lock className="h-6 w-6 text-red-500 mx-auto" />
      <div>
        <h4 className="font-bold text-red-600">Account Temporarily Locked</h4>
        <p className="text-[10px] text-muted-foreground">Detected 3 failed login attempts from unknown IP.</p>
      </div>
      {emailSent ? (
        <Badge className="bg-emerald-500/20 text-emerald-600 border-emerald-500/30 text-[10px]">
          Unlock Link Sent to Email ✓
        </Badge>
      ) : (
        <Button size="sm" variant="destructive" className="h-7 text-xs w-full" onClick={() => setEmailSent(true)}>
          Send One-Time Email Unlock
        </Button>
      )}
    </div>
  );
}

function ShadcnIoReframeDemo() {
  const [device, setDevice] = useState<"desktop" | "mobile">("desktop");
  return (
    <div className="p-3 rounded-xl border bg-card text-xs space-y-2">
      <div className="flex items-center justify-between">
        <span className="font-bold">Reframe Enterprise Template</span>
        <div className="flex gap-1 p-0.5 border rounded-lg bg-muted/40">
          <button
            onClick={() => setDevice("desktop")}
            className={\`p-1 rounded \${device === "desktop" ? "bg-background shadow-xs font-bold" : "text-muted-foreground"}\`}
          >
            <Monitor className="h-3 w-3" />
          </button>
          <button
            onClick={() => setDevice("mobile")}
            className={\`p-1 rounded \${device === "mobile" ? "bg-background shadow-xs font-bold" : "text-muted-foreground"}\`}
          >
            <Smartphone className="h-3 w-3" />
          </button>
        </div>
      </div>
      <div className={\`mx-auto border rounded-lg p-3 bg-muted/20 text-center transition-all \${device === "desktop" ? "w-full" : "max-w-[190px]"}\`}>
        <div className="text-[11px] font-bold text-foreground">Reframe SaaS Console</div>
        <p className="text-[10px] text-muted-foreground">Multi-region cluster telemetry & billing management.</p>
      </div>
    </div>
  );
}
`;

content += '\n' + componentDemos;
fs.writeFileSync('src/components/registry-live-preview.tsx', content, 'utf8');
console.log('Successfully added shadcn.io live preview blocks!');
