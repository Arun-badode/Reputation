import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { PieChart, Pie, Cell, ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";

// Dummy data for chart
const chartData = [
  { month: "Jan", value: 65 },
  { month: "Feb", value: 72 },
  { month: "Mar", value: 68 },
  { month: "Apr", value: 74 },
  { month: "May", value: 80 },
  { month: "Jun", value: 85 }
];

// Data for dashed circular progress (12 segments)
const score = 88;
const totalSegments = 12;
const filledSegments = Math.round((score / 100) * totalSegments);
const pieSegments = Array.from({ length: totalSegments }).map((_, i) => ({
  value: 1,
  color: i < filledSegments ? "#22c55e" : "#e5e7eb"
}));

const flaggedContent = [
  {
    icon: (
      <span className="dashboard-flagged-icon bg-danger bg-opacity-10 d-inline-flex align-items-center justify-content-center rounded-circle me-2" style={{width: 32, height: 32}}>
        <svg width="20" height="20" fill="none" viewBox="0 0 20 20"><circle cx="10" cy="10" r="9" stroke="#ef4444" strokeWidth="2"/><path d="M10 6v4" stroke="#ef4444" strokeWidth="2" strokeLinecap="round"/><circle cx="10" cy="14" r="1" fill="#ef4444"/></svg>
      </span>
    ),
    title: "Negative Review on TrustPilot",
    subtitle: "2 hours ago • Review Platform",
    content: '"My boss was not a good person, he used to make me work long hours."',
    priority: "High Priority",
    priorityClass: "text-danger",
    bg: "#fef2f2"
  },
  {
    icon: (
      <span className="dashboard-flagged-icon bg-warning bg-opacity-10 d-inline-flex align-items-center justify-content-center rounded-circle me-2" style={{width: 32, height: 32}}>
        <svg width="20" height="20" fill="none" viewBox="0 0 20 20"><circle cx="10" cy="10" r="9" stroke="#f59e42" strokeWidth="2"/><path d="M10 6v4" stroke="#f59e42" strokeWidth="2" strokeLinecap="round"/><circle cx="10" cy="14" r="1" fill="#f59e42"/></svg>
      </span>
    ),
    title: "Reply on Twitter",
    subtitle: "Yesterday • Social Media",
    content: '"@ReputationGuard your service is rubbish"',
    priority: "Medium Priority",
    priorityClass: "text-warning",
    bg: "#fef6e7"
  },
  {
    icon: (
      <span className="dashboard-flagged-icon bg-success bg-opacity-10 d-inline-flex align-items-center justify-content-center rounded-circle me-2" style={{width: 32, height: 32}}>
        <svg width="20" height="20" fill="none" viewBox="0 0 20 20"><circle cx="10" cy="10" r="9" stroke="#22c55e" strokeWidth="2"/><path d="M7 10l2 2 4-4" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
      </span>
    ),
    title: "Blog Mention",
    subtitle: "3 days ago • News Article",
    content: '"ReputationGuard was mentioned in an article about top reputation management tools for businesses..."',
    priority: "Low Priority",
    priorityClass: "text-success",
    bg: "#e7f9ef"
  }
];

const aiActions = [
  {
    title: "Fix to negative reviews",
    desc: "We detected 2 negative comments. Deleting can improve your reputation.",
    priority: "High Priority",
    priorityClass: "text-danger",
    btn: "Take Action"
  },
  {
    title: "Privacy",
    desc: "Adjust Twitter and Instagram Privacy",
    priority: "Medium Priority",
    priorityClass: "text-warning",
    btn: "Take Action"
  },
  {
    title: "GPT-4 Suggestion",
    desc: "Delete reddit thread",
    priority: "Low Priority",
    priorityClass: "text-success",
    btn: "Take Action"
  }
];

const accounts = [
  {
    icon: (
      <svg width="28" height="28" fill="none" viewBox="0 0 28 28"><circle cx="14" cy="14" r="14" fill="#fff"/><path d="M19.5 8.5h-11A1.5 1.5 0 0 0 7 10v8a1.5 1.5 0 0 0 1.5 1.5h11A1.5 1.5 0 0 0 21 18v-8a1.5 1.5 0 0 0-1.5-1.5z" stroke="#ea4335" strokeWidth="1.5"/><path d="M14 11v6" stroke="#ea4335" strokeWidth="1.5"/><circle cx="14" cy="14" r="1" fill="#ea4335"/></svg>
    ),
    name: "Google Business",
    status: "Connected",
    statusClass: "text-success",
    statusBg: "bg-success bg-opacity-10",
    sync: "Last synced: Today",
    info: "4.7 ★ (128 reviews)",
    update: false
  },
  {
    icon: (
      <svg width="28" height="28" fill="none" viewBox="0 0 28 28"><circle cx="14" cy="14" r="14" fill="#fff"/><path d="M19 9a2 2 0 0 0-2-2H11a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9z" stroke="#1877f3" strokeWidth="1.5"/><path d="M14 13v4" stroke="#1877f3" strokeWidth="1.5"/><circle cx="14" cy="11" r="1" fill="#1877f3"/></svg>
    ),
    name: "Facebook",
    status: "Connected",
    statusClass: "text-success",
    statusBg: "bg-success bg-opacity-10",
    sync: "Last synced: Yesterday",
    info: "1,245 followers",
    update: false
  },
  {
    icon: (
      <svg width="28" height="28" fill="none" viewBox="0 0 28 28"><circle cx="14" cy="14" r="14" fill="#fff"/><path d="M19 9a2 2 0 0 0-2-2H11a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9z" stroke="#1da1f2" strokeWidth="1.5"/><path d="M14 13v4" stroke="#1da1f2" strokeWidth="1.5"/><circle cx="14" cy="11" r="1" fill="#1da1f2"/></svg>
    ),
    name: "Twitter",
    status: "Connected",
    statusClass: "text-success",
    statusBg: "bg-success bg-opacity-10",
    sync: "Last synced: 2 days ago",
    info: "876 followers",
    update: false
  },
  {
    icon: (
      <svg width="28" height="28" fill="none" viewBox="0 0 28 28"><rect width="28" height="28" rx="6" fill="#fff"/><rect x="6" y="6" width="16" height="16" rx="4" fill="#1877f3" fillOpacity="0.13"/><path d="M14 10v8" stroke="#1877f3" strokeWidth="1.5"/><circle cx="14" cy="9" r="1" fill="#1877f3"/></svg>
    ),
    name: "LinkedIn",
    status: "Update",
    statusClass: "text-warning",
    statusBg: "bg-warning bg-opacity-10",
    sync: "Last synced: 3 months ago",
    info: "542 connections",
    update: true
  }
];

const Dashboard = () => (
  <div className="dashboard-unique-main bg-light p-3 p-md-4" style={{ minHeight: "100vh" }}>
    <div className="row g-4 mb-4">
      {/* Reputation Score Card */}
      <div className="col-12 col-md-4">
        <div className="dashboard-unique-scorecard bg-white rounded-4 p-4 h-100 shadow-sm position-relative">
          <div className="d-flex justify-content-between align-items-start mb-2">
            <div className="fw-semibold" style={{ fontSize: "1.1rem" }}>Reputation Score</div>
            <span className="badge bg-light text-success fw-semibold" style={{ fontSize: "1em", border: "1px solid #d1fae5", background: "#dcfce7" }}>
              <svg width="16" height="16" fill="none" viewBox="0 0 20 20" style={{ marginRight: 3, marginTop: -2 }}>
                <path d="M10 15V5M10 5l-3 3M10 5l3 3" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" />
              </svg>
              +6%
            </span>
          </div>
          <div className="d-flex flex-column align-items-center justify-content-center my-3">
            {/* Dashed Circular Progress with PieChart */}
            <div className="position-relative mb-2" style={{ width: 120, height: 120 }}>
              <ResponsiveContainer width={120} height={120}>
                <PieChart>
                  <Pie
                    data={pieSegments}
                    dataKey="value"
                    cx="50%"
                    cy="50%"
                    innerRadius={48}
                    outerRadius={58}
                    startAngle={90}
                    endAngle={-270}
                    stroke="none"
                    cornerRadius={8}
                  >
                    {pieSegments.map((entry, idx) => (
                      <Cell key={idx} fill={entry.color} />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
              <div className="position-absolute top-50 start-50 translate-middle text-center" style={{ width: 80 }}>
                <div className="fw-bold" style={{ fontSize: "2rem", color: "#222" }}>88</div>
                <div className="text-muted" style={{ fontSize: "0.95em" }}>out of 100</div>
              </div>
            </div>
            <div className="d-flex justify-content-between w-100 mt-2" style={{ fontSize: "1.05em" }}>
              <div className="text-center flex-fill">
                <div className="fw-bold" style={{ color: "#222", fontSize: "1.15em" }}>92</div>
                <div className="text-muted" style={{ fontSize: "1em" }}>Social</div>
              </div>
              <div className="text-center flex-fill">
                <div className="fw-bold" style={{ color: "#222", fontSize: "1.15em" }}>85</div>
                <div className="text-muted" style={{ fontSize: "1em" }}>Search</div>
              </div>
              <div className="text-center flex-fill">
                <div className="fw-bold" style={{ color: "#222", fontSize: "1.15em" }}>78</div>
                <div className="text-muted" style={{ fontSize: "1em" }}>Reviews</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Upgrade Card */}
      <div className="col-12 col-md-8">
        <div
          className="dashboard-unique-upgradecard rounded-4 p-4 h-100 d-flex flex-column flex-md-row align-items-center justify-content-between"
          style={{
            background: "linear-gradient(90deg, #2563eb 0%, #6366f1 100%)",
            minHeight: 200,
            position: "relative"
          }}
        >
          <div className="text-white">
            <div className="fw-bold" style={{ fontSize: "1.35rem" }}>Upgrade to Pro Plan</div>
            <div className="mb-4" style={{ fontSize: "1.08rem", opacity: 0.93 }}>
              Get advanced monitoring features, real-time alerts, and priority support.
            </div>
            <div className="d-flex gap-2">
              <button className="btn btn-light fw-semibold px-4 py-2">Upgrade Now</button>
              <button className="btn btn-outline-light fw-semibold px-4 py-2">Compare Plans</button>
            </div>
          </div>
          <div className="d-none d-md-block ms-md-4">
            <div
              style={{
                width: 110,
                height: 110,
                background: "rgba(255,255,255,0.07)",
                borderRadius: 16,
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
              }}
            >
              <svg width="70" height="70" fill="none" viewBox="0 0 48 48">
                <rect width="48" height="48" rx="12" fill="#2563eb" fillOpacity="0.13" />
                <path d="M24 14l10 4v6c0 7-4.5 10-10 10s-10-3-10-10v-6l10-4z" stroke="#fff" strokeWidth="2" />
                <path d="M24 22v6" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* Reputation Over Time */}
    <div className="dashboard-unique-chartsection bg-white rounded-4 p-4 mt-2 shadow-sm">
      <div className="d-flex justify-content-between align-items-center mb-2 flex-wrap gap-2">
        <div className="fw-semibold" style={{ fontSize: "1.13rem" }}>Reputation Over Time</div>
        <button className="btn btn-light border px-3 py-1 d-flex align-items-center gap-2" style={{ borderRadius: 8, fontSize: "1em" }}>
          Last 6 Months
          <svg width="16" height="16" fill="none" viewBox="0 0 20 20"><path d="M6 8l4 4 4-4" stroke="#64748b" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
        </button>
      </div>
      {/* Chart */}
      <div
        className="w-100"
        style={{
          minHeight: 180,
          height: "45vw",
          maxHeight: 320,
          minWidth: 0
        }}
      >
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={chartData} margin={{ top: 20, right: 20, left: 0, bottom: 0 }}>
            <CartesianGrid stroke="#e5e7eb" />
            <XAxis dataKey="month" tick={{ fontSize: 13 }} axisLine={false} tickLine={false} />
            <YAxis domain={[0, 100]} tick={{ fontSize: 13 }} axisLine={false} tickLine={false} />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="value"
              stroke="#2563eb"
              strokeWidth={3}
              dot={{ r: 4, stroke: "#fff", strokeWidth: 2 }}
              activeDot={{ r: 6 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>

    {/* Flagged Content & AI Action Plan */}
    <div className="row g-4 mt-4 dashboard-flagged-row">
      {/* Flagged Content */}
      <div className="col-12 col-lg-7">
        <div className="bg-white rounded-4 p-4 h-100 shadow-sm">
          <div className="d-flex justify-content-between align-items-center mb-3">
            <div className="fw-semibold" style={{ fontSize: "1.13rem" }}>Flagged Content</div>
            <a href="#" className="text-primary fw-semibold small text-decoration-none">View All</a>
          </div>
          <div className="d-flex flex-column gap-3">
            {flaggedContent.map((item, idx) => (
              <div
                key={idx}
                className="dashboard-flagged-card rounded-3 p-3 d-flex align-items-start"
                style={{ background: item.bg }}
              >
                {item.icon}
                <div className="flex-grow-1">
                  <div className="d-flex justify-content-between align-items-center mb-1">
                    <span className="fw-semibold" style={{ fontSize: "1.08em" }}>{item.title}</span>
                    <span className={`badge px-2 py-1 fw-semibold ${item.priorityClass}`} style={{ background: "#fff", fontSize: "0.95em", border: "1px solid #f3f4f6" }}>
                      {item.priority}
                    </span>
                  </div>
                  <div className="text-muted small mb-1">{item.subtitle}</div>
                  <div className="mb-2" style={{ fontSize: "1.01em" }}>{item.content}</div>
                  <div className="d-flex gap-2">
                    {item.priority === "Low Priority" ? (
                      <button className="btn btn-outline-secondary btn-sm px-3">Archive</button>
                    ) : (
                      <button className="btn btn-outline-secondary btn-sm px-3">Ignore</button>
                    )}
                    <button className="btn btn-primary btn-sm px-3" style={{ background: "#2563eb", borderColor: "#2563eb" }}>Review</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* AI Action Plan */}
      <div className="col-12 col-lg-5">
        <div className="dashboard-ai-actionplan bg-white rounded-4 p-4 h-100 shadow-sm">
          <div className="d-flex justify-content-between align-items-center mb-3">
            <div className="fw-semibold" style={{ fontSize: "1.13rem" }}>AI Action Plan</div>
            <span className="badge bg-primary bg-opacity-10 text-primary fw-semibold small" style={{ fontSize: "1em", borderRadius: 12, padding: "6px 16px" }}>3 Actions</span>
          </div>
          <div className="d-flex flex-column gap-3">
            {aiActions.map((item, idx) => (
              <div
                key={idx}
                className="dashboard-ai-action-card rounded-4 p-3 mb-0"
                style={{
                  background: "#fff",
                  border: "1.5px solid #e5e7eb",
                  boxShadow: "0 1px 2px 0 rgba(16,24,40,0.03)"
                }}
              >
                <div className="fw-semibold mb-1" style={{ fontSize: "1.08em" }}>{item.title}</div>
                <div className="text-muted mb-2" style={{ fontSize: "1em" }}>{item.desc}</div>
                <div className="d-flex justify-content-between align-items-end">
                  <span className={`fw-semibold ${item.priorityClass}`} style={{ fontSize: "1em" }}>{item.priority}</span>
                  <button
                    className="btn btn-primary fw-semibold"
                    style={{
                      background: "#2563eb",
                      borderColor: "#2563eb",
                      borderRadius: 8,
                      fontSize: "1em",
                      padding: "6px 20px"
                    }}
                  >
                    {item.btn}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>

    {/* Connected Accounts */}
    <div className="dashboard-connected-accounts bg-white rounded-4 p-4 mt-4 shadow-sm">
      <div className="d-flex justify-content-between align-items-center mb-3 flex-wrap gap-2">
        <div className="fw-semibold" style={{ fontSize: "1.13rem" }}>Connected Accounts</div>
        <button className="btn btn-link text-primary fw-semibold px-0" style={{ fontSize: "1em", textDecoration: "none" }}>
          + Add Account
        </button>
      </div>
      <div className="row g-3">
        {/* Google Business */}
        <div className="col-12 col-md-6 col-lg-3">
          <div className="dashboard-account-card border rounded-3 p-3 h-100 d-flex flex-column gap-2" style={{ background: "#fff", border: "1.5px solid #e5e7eb", minHeight: 110 }}>
            <div className="d-flex align-items-center justify-content-between">
              <div className="d-flex align-items-center gap-2">
                <span style={{ width: 28, height: 28, display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <svg width="28" height="28" viewBox="0 0 28 28"><circle cx="14" cy="14" r="14" fill="#fff"/><text x="7" y="21" fontSize="18" fontWeight="bold" fill="#ea4335">G</text></svg>
                </span>
                <span className="fw-semibold" style={{ fontSize: "1.08em" }}>Google Business</span>
              </div>
              <span className="badge bg-success bg-opacity-10 text-success fw-semibold d-flex align-items-center" style={{ fontSize: "0.95em", borderRadius: 12, padding: "6px 12px" }}>
                <svg width="16" height="16" fill="none" viewBox="0 0 20 20" style={{marginRight: 2, marginTop: -2}}>
                  <circle cx="10" cy="10" r="9" stroke="#22c55e" strokeWidth="2"/>
                  <path d="M7 10l2 2 4-4" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                Connected
              </span>
            </div>
            <div className="text-muted small mt-1">Last synced: Today</div>
            <div className="text-muted small">4.7 ★ (128 reviews)</div>
            <span className="ms-auto d-flex align-items-center" style={{ position: "absolute", right: 24, bottom: 18 }}>
              {/* Recycle/Refresh Icon (matches first image, not the second) */}
              <svg width="26" height="26" fill="none" viewBox="0 0 26 26">
                <g>
                  <path d="M13 4a9 9 0 1 1-9 9" stroke="#94a3b8" strokeWidth="1.7" strokeLinecap="round"/>
                  <path d="M4 8v5h5" stroke="#94a3b8" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/>
                </g>
              </svg>
            </span>
          </div>
        </div>
        {/* Facebook */}
        <div className="col-12 col-md-6 col-lg-3">
          <div className="dashboard-account-card border rounded-3 p-3 h-100 d-flex flex-column gap-2" style={{ background: "#fff", border: "1.5px solid #e5e7eb", minHeight: 110 }}>
            <div className="d-flex align-items-center justify-content-between">
              <div className="d-flex align-items-center gap-2">
                <span style={{ width: 28, height: 28, display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <svg width="28" height="28" viewBox="0 0 28 28"><circle cx="14" cy="14" r="14" fill="#fff"/><text x="6" y="21" fontSize="18" fontWeight="bold" fill="#1877f3">f</text></svg>
                </span>
                <span className="fw-semibold" style={{ fontSize: "1.08em" }}>Facebook</span>
              </div>
              <span className="badge bg-success bg-opacity-10 text-success fw-semibold d-flex align-items-center" style={{ fontSize: "0.95em", borderRadius: 12, padding: "6px 12px" }}>
                <svg width="16" height="16" fill="none" viewBox="0 0 20 20" style={{marginRight: 2, marginTop: -2}}>
                  <circle cx="10" cy="10" r="9" stroke="#22c55e" strokeWidth="2"/>
                  <path d="M7 10l2 2 4-4" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                Connected
              </span>
            </div>
            <div className="text-muted small mt-1">Last synced: Yesterday</div>
            <div className="text-muted small">1,245 followers</div>
            <span className="ms-auto d-flex align-items-center" style={{ position: "absolute", right: 24, bottom: 18 }}>
              {/* Recycle/Refresh Icon (matches first image, not the second) */}
              <svg width="26" height="26" fill="none" viewBox="0 0 26 26">
                <g>
                  <path d="M13 4a9 9 0 1 1-9 9" stroke="#94a3b8" strokeWidth="1.7" strokeLinecap="round"/>
                  <path d="M4 8v5h5" stroke="#94a3b8" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/>
                </g>
              </svg>
            </span>
          </div>
        </div>
        {/* Twitter */}
        <div className="col-12 col-md-6 col-lg-3">
          <div className="dashboard-account-card border rounded-3 p-3 h-100 d-flex flex-column gap-2" style={{ background: "#fff", border: "1.5px solid #e5e7eb", minHeight: 110 }}>
            <div className="d-flex align-items-center justify-content-between">
              <div className="d-flex align-items-center gap-2">
                <span style={{ width: 28, height: 28, display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <svg width="28" height="28" viewBox="0 0 28 28"><circle cx="14" cy="14" r="14" fill="#fff"/><text x="5" y="21" fontSize="18" fontWeight="bold" fill="#1da1f2">t</text></svg>
                </span>
                <span className="fw-semibold" style={{ fontSize: "1.08em" }}>Twitter</span>
              </div>
              <span className="badge bg-success bg-opacity-10 text-success fw-semibold d-flex align-items-center" style={{ fontSize: "0.95em", borderRadius: 12, padding: "6px 12px" }}>
                <svg width="16" height="16" fill="none" viewBox="0 0 20 20" style={{marginRight: 2, marginTop: -2}}>
                  <circle cx="10" cy="10" r="9" stroke="#22c55e" strokeWidth="2"/>
                  <path d="M7 10l2 2 4-4" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                Connected
              </span>
            </div>
            <div className="text-muted small mt-1">Last synced: 2 days ago</div>
            <div className="text-muted small">876 followers</div>
            <span className="ms-auto d-flex align-items-center" style={{ position: "absolute", right: 24, bottom: 18 }}>
              {/* Recycle/Refresh Icon (matches first image, not the second) */}
              <svg width="26" height="26" fill="none" viewBox="0 0 26 26">
                <g>
                  <path d="M13 4a9 9 0 1 1-9 9" stroke="#94a3b8" strokeWidth="1.7" strokeLinecap="round"/>
                  <path d="M4 8v5h5" stroke="#94a3b8" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/>
                </g>
              </svg>
            </span>
          </div>
        </div>
        {/* LinkedIn */}
        <div className="col-12 col-md-6 col-lg-3">
          <div className="dashboard-account-card border rounded-3 p-3 h-100 d-flex flex-column gap-2" style={{ background: "#fff", border: "1.5px solid #e5e7eb", minHeight: 110 }}>
            <div className="d-flex align-items-center justify-content-between">
              <div className="d-flex align-items-center gap-2">
                <span style={{ width: 28, height: 28, display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <svg width="28" height="28" viewBox="0 0 28 28"><rect width="28" height="28" rx="6" fill="#fff"/><rect x="6" y="6" width="16" height="16" rx="4" fill="#1877f3" fillOpacity="0.13"/><text x="8" y="21" fontSize="18" fontWeight="bold" fill="#1877f3">in</text></svg>
                </span>
                <span className="fw-semibold" style={{ fontSize: "1.08em" }}>LinkedIn</span>
              </div>
              <span className="badge bg-warning bg-opacity-10 text-warning fw-semibold d-flex align-items-center" style={{ fontSize: "0.95em", borderRadius: 12, padding: "6px 12px" }}>
                <svg width="16" height="16" fill="none" viewBox="0 0 20 20" style={{marginRight: 2, marginTop: -2}}>
                  <circle cx="10" cy="10" r="9" stroke="#f59e42" strokeWidth="2"/>
                  <path d="M10 6v4" stroke="#f59e42" strokeWidth="2" strokeLinecap="round"/>
                  <circle cx="10" cy="14" r="1" fill="#f59e42"/>
                </svg>
                Update
              </span>
            </div>
            <div className="text-muted small mt-1">Last synced: 3 months ago</div>
            <div className="text-muted small">542 connections</div>
            <span className="ms-auto d-flex align-items-center" style={{ position: "absolute", right: 24, bottom: 18 }}>
              {/* Recycle/Refresh Icon (matches first image, not the second) */}
              <svg width="26" height="26" fill="none" viewBox="0 0 26 26">
                <g>
                  <path d="M13 4a9 9 0 1 1-9 9" stroke="#94a3b8" strokeWidth="1.7" strokeLinecap="round"/>
                  <path d="M4 8v5h5" stroke="#94a3b8" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/>
                </g>
              </svg>
            </span>
          </div>
        </div>
      </div>
    </div>

    {/* Reports & Insights */}
    <div className="dashboard-reports-section mt-5">
      <div className="d-flex justify-content-between align-items-center mb-3 flex-wrap gap-2">
        <div className="fw-semibold" style={{ fontSize: "1.13rem" }}>Reports & Insights</div>
        <a href="#" className="btn btn-link text-primary fw-semibold px-0" style={{ fontSize: "1em", textDecoration: "none" }}>
          View All Reports
        </a>
      </div>
      <div className="row g-3">
        {/* Monthly Summary */}
        <div className="col-12 col-md-6 col-lg-4">
          <div className="dashboard-report-card rounded-4 overflow-hidden bg-white h-100 border" style={{ minHeight: 270 }}>
            <div
              className="p-3 position-relative"
              style={{
                background: "linear-gradient(90deg, #6366f1 0%, #2563eb 100%)",
                minHeight: 120
              }}
            >
              <div className="text-white fw-semibold" style={{ fontSize: "1.15rem" }}>Monthly Summary</div>
              <div className="text-white-50" style={{ fontSize: "1em" }}>June 2025</div>
          
              {/* Chart SVG */}
              <svg width="100%" height="60" viewBox="0 0 220 60" fill="none" style={{ marginTop: 18 }}>
                <rect x="10" y="30" width="10" height="20" rx="2" fill="#a5b4fc" />
                <rect x="30" y="20" width="10" height="30" rx="2" fill="#818cf8" />
                <rect x="50" y="25" width="10" height="25" rx="2" fill="#818cf8" />
                <rect x="70" y="15" width="10" height="35" rx="2" fill="#6366f1" />
                <rect x="90" y="28" width="10" height="22" rx="2" fill="#818cf8" />
                <rect x="110" y="18" width="10" height="32" rx="2" fill="#6366f1" />
                <rect x="130" y="22" width="10" height="28" rx="2" fill="#818cf8" />
                <rect x="150" y="12" width="10" height="38" rx="2" fill="#6366f1" />
                <rect x="170" y="26" width="10" height="24" rx="2" fill="#818cf8" />
                <rect x="190" y="20" width="10" height="30" rx="2" fill="#6366f1" />
                <polyline points="10,40 30,30 50,35 70,25 90,38 110,28 130,32 150,22 170,36 190,30" fill="none" stroke="#fff" strokeWidth="2" opacity="0.7"/>
              </svg>
            </div>
            <div className="p-3 bg-white">
              <div className="fw-semibold mb-1 d-flex justify-content-between align-items-center" style={{ fontSize: "1.08em" }}>
                <span>Overall Performance</span>
                <span className="d-flex align-items-center" style={{ color: "#22c55e", fontWeight: 500, fontSize: "1em" }}>
                  <svg width="18" height="18" fill="none" viewBox="0 0 20 20" style={{marginRight: 4, marginTop: -2}}>
                    <path d="M10 15V5M10 5l-3 3M10 5l3 3" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                  12%
                </span>
              </div>
              <div className="text-muted mb-2" style={{ fontSize: "1em" }}>
                Your online reputation score improved this month, with positive engagement on LinkedIn and reduced high-risk content.
              </div>
              <div className="d-flex justify-content-between align-items-center flex-wrap gap-2">
                <div className="text-muted small">Generated on June 11, 2025</div>
                <a href="#" className="btn btn-light border px-3 py-1 d-flex align-items-center gap-2 dashboard-report-download-btn" style={{ borderRadius: 8, fontSize: "1em", color: "#2563eb", borderColor: "#e5e7eb", background: "#f8fafc" }}>
                  <svg width="16" height="16" fill="none" viewBox="0 0 20 20"><path d="M10 4v8m0 0l3-3m-3 3l-3-3" stroke="#2563eb" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><rect x="4" y="14" width="12" height="2" rx="1" fill="#2563eb" fillOpacity="0.13"/></svg>
                  Download
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* Position */}
        <div className="col-12 col-md-6 col-lg-4">
          <div className="dashboard-report-card rounded-4 overflow-hidden bg-white h-100 border" style={{ minHeight: 270 }}>
            <div
              className="p-3 position-relative"
              style={{
                background: "linear-gradient(90deg, #a78bfa 0%, #f472b6 100%)",
                minHeight: 120
              }}
            >
              <div className="text-white fw-semibold" style={{ fontSize: "1.15rem" }}>Position</div>
              <div className="text-white-50" style={{ fontSize: "1em" }}>Q2 2025</div>
              <svg width="100%" height="60" viewBox="0 0 220 60" fill="none" style={{ marginTop: 18 }}>
                <polyline points="10,50 30,40 50,45 70,35 90,38 110,28 130,32 150,22 170,36 190,20" fill="none" stroke="#fff" strokeWidth="2" opacity="0.7"/>
                <circle cx="10" cy="50" r="3" fill="#fff" opacity="0.7"/>
                <circle cx="30" cy="40" r="3" fill="#fff" opacity="0.7"/>
                <circle cx="50" cy="45" r="3" fill="#fff" opacity="0.7"/>
                <circle cx="70" cy="35" r="3" fill="#fff" opacity="0.7"/>
                <circle cx="90" cy="38" r="3" fill="#fff" opacity="0.7"/>
                <circle cx="110" cy="28" r="3" fill="#fff" opacity="0.7"/>
                <circle cx="130" cy="32" r="3" fill="#fff" opacity="0.7"/>
                <circle cx="150" cy="22" r="3" fill="#fff" opacity="0.7"/>
                <circle cx="170" cy="36" r="3" fill="#fff" opacity="0.7"/>
                <circle cx="190" cy="20" r="3" fill="#fff" opacity="0.7"/>
              </svg>
            </div>
            <div className="p-3 bg-white">
              <div className="fw-semibold mb-1 d-flex justify-content-between align-items-center" style={{ fontSize: "1.08em" }}>
                <span>Online Positioning Analysis</span>
                <span className="text-primary" style={{ fontSize: "1em", fontWeight: 500 }}>Top 3</span>
              </div>
              <div className="text-muted mb-2" style={{ fontSize: "1em" }}>
                Your name appears in 20 search results for your industry peers.
              </div>
              <div className="d-flex justify-content-between align-items-center flex-wrap gap-2">
                <div className="text-muted small">Generated on May 30, 2025</div>
                <a href="#" className="btn btn-light border px-3 py-1 d-flex align-items-center gap-2 dashboard-report-download-btn" style={{ borderRadius: 8, fontSize: "1em", color: "#2563eb", borderColor: "#e5e7eb", background: "#f8fafc" }}>
                  <svg width="16" height="16" fill="none" viewBox="0 0 20 20"><path d="M10 4v8m0 0l3-3m-3 3l-3-3" stroke="#2563eb" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><rect x="4" y="14" width="12" height="2" rx="1" fill="#2563eb" fillOpacity="0.13"/></svg>
                  Download
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* Risk Assessment */}
        <div className="col-12 col-md-6 col-lg-4">
          <div className="dashboard-report-card rounded-4 overflow-hidden bg-white h-100 border" style={{ minHeight: 270 }}>
            <div
              className="p-3 position-relative"
              style={{
                background: "linear-gradient(90deg, #fbbf24 0%, #f87171 100%)",
                minHeight: 120
              }}
            >
              <div className="text-white fw-semibold" style={{ fontSize: "1.15rem" }}>Risk Assessment</div>
              <div className="text-white-50" style={{ fontSize: "1em" }}>June 2025</div>
              <svg width="100%" height="60" viewBox="0 0 220 60" fill="none" style={{ marginTop: 18 }}>
                <rect x="10" y="30" width="10" height="20" rx="2" fill="#fcd34d" />
                <rect x="30" y="20" width="10" height="30" rx="2" fill="#fbbf24" />
                <rect x="50" y="25" width="10" height="25" rx="2" fill="#fbbf24" />
                <rect x="70" y="15" width="10" height="35" rx="2" fill="#f87171" />
                <rect x="90" y="28" width="10" height="22" rx="2" fill="#fbbf24" />
                <rect x="110" y="18" width="10" height="32" rx="2" fill="#f87171" />
                <rect x="130" y="22" width="10" height="28" rx="2" fill="#fbbf24" />
                <rect x="150" y="12" width="10" height="38" rx="2" fill="#f87171" />
                <rect x="170" y="26" width="10" height="24" rx="2" fill="#fbbf24" />
                <rect x="190" y="20" width="10" height="30" rx="2" fill="#f87171" />
                <polyline points="10,40 30,30 50,35 70,25 90,38 110,28 130,32 150,22 170,36 190,30" fill="none" stroke="#fff" strokeWidth="2" opacity="0.7"/>
              </svg>
            </div>
            <div className="p-3 bg-white">
              <div className="fw-semibold mb-1 d-flex justify-content-between align-items-center" style={{ fontSize: "1.08em" }}>
                <span>Threat Level</span>
                <span className="text-warning" style={{ fontSize: "1em", fontWeight: 500 }}>Medium</span>
              </div>
              <div className="text-muted mb-2" style={{ fontSize: "1em" }}>
                Potential reputation risks identified. Recommended actions provided.
              </div>
              <div className="d-flex justify-content-between align-items-center flex-wrap gap-2">
                <div className="text-muted small">Generated on June 8, 2025</div>
                <a href="#" className="btn btn-light border px-3 py-1 d-flex align-items-center gap-2 dashboard-report-download-btn" style={{ borderRadius: 8, fontSize: "1em", color: "#2563eb", borderColor: "#e5e7eb", background: "#f8fafc" }}>
                  <svg width="16" height="16" fill="none" viewBox="0 0 20 20"><path d="M10 4v8m0 0l3-3m-3 3l-3-3" stroke="#2563eb" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><rect x="4" y="14" width="12" height="2" rx="1" fill="#2563eb" fillOpacity="0.13"/></svg>
                  Download
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Dashboard;
