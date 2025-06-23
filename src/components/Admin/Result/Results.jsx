import React from "react";
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell
} from "recharts";
import "bootstrap/dist/css/bootstrap.min.css";

// Dummy data for the graph
const timelineData = [
  { date: "Mar 15", score: 72, issues: 8 },
  { date: "Apr 1", score: 80, issues: 10 },
  { date: "Apr 15", score: 78, issues: 9 },
  { date: "May 1", score: 76, issues: 7 },
  { date: "May 15", score: 74, issues: 5 },
  { date: "Jun 1", score: 73, issues: 4 },
  { date: "Jun 11", score: 72, issues: 4 }
];

// Dummy data for pie chart
const pieData = [
  { name: "Twitter", value: 6, color: "#2563eb" },
  { name: "LinkedIn", value: 4, color: "#0ea5e9" },
  { name: "Reddit", value: 3, color: "#ef4444" },
  { name: "Facebook", value: 5, color: "#6366f1" }
];

const issues = [
  {
    platform: "Twitter",
    label: "Very High Risk (5.0)",
    labelColor: "#fee2e2",
    borderColor: "#ef4444",
    content: "This company’s policies are a joke.",
    tags: [{ name: "Twitter", color: "#2563eb" }],
    date: "May 15, 2022"
  },
  {
    platform: "LinkedIn",
    label: "Very High Risk (5.0)",
    labelColor: "#fee2e2",
    borderColor: "#ef4444",
    content: "Shared confidential information about project timeline",
    tags: [{ name: "LinkedIn", color: "#0ea5e9" }],
    date: "Jan 5, 2023"
  },
  {
    platform: "Reddit",
    label: "High Risk (4.0)",
    labelColor: "#fef9c3",
    borderColor: "#f59e42",
    content: "This guy got sued for breach of NDA",
    tags: [{ name: "Reddit", color: "#ef4444" }],
    date: "Jun 10, 2021"
  },
  {
    platform: "Twitter",
    label: "High Risk (4.0)",
    labelColor: "#fef9c3",
    borderColor: "#f59e42",
    content: "Negative comment about former manager’s leadership style",
    tags: [{ name: "Twitter", color: "#2563eb" }],
    date: "Nov 12, 2022"
  },
  {
    platform: "Reddit",
    label: "High Risk (4.0)",
    labelColor: "#fef9c3",
    borderColor: "#f59e42",
    content: "Complaint about current job workload and hours",
    tags: [{ name: "Reddit", color: "#ef4444" }],
    date: "May 2, 2023"
  },
  {
    platform: "Twitter",
    label: "High Risk (4.0)",
    labelColor: "#fef9c3",
    borderColor: "#f59e42",
    content: "Mentioned using company resources for personal project",
    tags: [{ name: "Twitter", color: "#2563eb" }],
    date: "Sep 20, 2022"
  },
  {
    platform: "LinkedIn",
    label: "Medium Risk (3.0)",
    labelColor: "#f1f5f9",
    borderColor: "#facc15",
    content: "Rejected unfairly after biased interview.",
    tags: [{ name: "LinkedIn", color: "#0ea5e9" }],
    date: "Jan 20, 2022"
  },
  {
    platform: "Reddit",
    label: "Medium Risk (3.0)",
    labelColor: "#f1f5f9",
    borderColor: "#facc15",
    content: "Political opinion on controversial policy",
    tags: [{ name: "Reddit", color: "#ef4444" }],
    date: "Apr 25, 2020"
  },
  {
    platform: "Facebook",
    label: "Medium Risk (3.0)",
    labelColor: "#f1f5f9",
    borderColor: "#facc15",
    content: "Shared photo at party with inappropriate content in background",
    tags: [{ name: "Facebook", color: "#6366f1" }],
    date: "Mar 18, 2023"
  },
  {
    platform: "LinkedIn",
    label: "Medium Risk (3.0)",
    labelColor: "#f1f5f9",
    borderColor: "#facc15",
    content: "Shared industry rumor about competitor’s financial troubles",
    tags: [{ name: "LinkedIn", color: "#0ea5e9" }],
    date: "Feb 14, 2023"
  }
];

const Result = () => (
  <div className="result-main-container bg-white p-3 p-md-4" style={{minHeight: "100vh"}}>
    {/* Header */}
    <div className="row mb-2 align-items-center">
      <div className="col-12 col-md-6 mb-2 mb-md-0">
        <h4 className="fw-bold mb-0">RESULTS</h4>
        <div className="text-muted" style={{fontSize: "1.01rem"}}>Comprehensive analysis of detected issues across all platforms</div>
      </div>
      <div className="col-12 col-md-6 d-flex gap-2 justify-content-md-end flex-wrap">
        <button className="btn btn-outline-secondary btn-sm d-flex align-items-center gap-1 mb-2 mb-md-0">
          {/* Rescan Icon */}
          <svg width="16" height="16" fill="none" viewBox="0 0 20 20"><path d="M3.5 10A6.5 6.5 0 0 1 17 7.5" stroke="#64748b" strokeWidth="1.5" strokeLinecap="round"/><path d="M17 7.5V4.5a.5.5 0 0 0-.5-.5h-3" stroke="#64748b" strokeWidth="1.5" strokeLinecap="round"/><path d="M16.5 10A6.5 6.5 0 0 1 3 13.5" stroke="#64748b" strokeWidth="1.5" strokeLinecap="round"/><path d="M3 13.5v3a.5.5 0 0 0 .5.5h3" stroke="#64748b" strokeWidth="1.5" strokeLinecap="round"/></svg>
          Rescan Now
        </button>
        <button className="btn btn-outline-secondary btn-sm d-flex align-items-center gap-1 mb-2 mb-md-0">
          {/* Export Icon */}
          <svg width="16" height="16" fill="none" viewBox="0 0 20 20"><path d="M10 3v9m0 0l-3-3m3 3l3-3" stroke="#64748b" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><rect x="4" y="14" width="12" height="3" rx="1" stroke="#64748b" strokeWidth="1.5"/></svg>
          Export Results
        </button>
        <button className="btn btn-primary btn-sm d-flex align-items-center gap-1" style={{background: "#6366F1", borderColor: "#6366F1"}}>
          {/* Auto-Fix Icon */}
          <svg width="16" height="16" fill="none" viewBox="0 0 20 20"><path d="M7.5 3.5l9 9m-2.5-6.5l-6.5 6.5m-2 2l-1.5 4 4-1.5" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
          Auto-Fix Selected
        </button>
      </div>
    </div>

    {/* Stats Cards Section */}
    <div className="row g-3 mb-4 mt-2">
      <div className="col-12 col-md-6 col-lg-3">
        <div className="result-stats-card bg-white rounded-4 p-4 d-flex align-items-center gap-3 shadow-sm h-100">
          <span style={{
            background: "#EEF2FF",
            borderRadius: "50%",
            padding: 14,
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
          }}>
            <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
              <path d="M12 3l7 4v6c0 5-3.5 7-7 7s-7-2-7-7V7l7-4z" stroke="#6366F1" strokeWidth="2"/>
            </svg>
          </span>
          <div>
            <div className="fw-bold" style={{fontSize: "1.25rem", color: "#222"}}>72/100</div>
            <div className="text-muted" style={{fontSize: "1rem"}}>Reputation Score</div>
          </div>
        </div>
      </div>
      <div className="col-12 col-md-6 col-lg-3">
        <div className="result-stats-card bg-white rounded-4 p-4 d-flex align-items-center gap-3 shadow-sm h-100">
          <span style={{
            background: "#fee2e2",
            borderRadius: "50%",
            padding: 14,
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
          }}>
            <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="10" stroke="#ef4444" strokeWidth="2"/>
              <path d="M12 8v4" stroke="#ef4444" strokeWidth="2" strokeLinecap="round"/>
              <circle cx="12" cy="16" r="1" fill="#ef4444"/>
            </svg>
          </span>
          <div>
            <div className="fw-bold" style={{fontSize: "1.25rem", color: "#222"}}>10</div>
            <div className="text-muted" style={{fontSize: "1rem"}}>Total Issues</div>
          </div>
        </div>
      </div>
      <div className="col-12 col-md-6 col-lg-3">
        <div className="result-stats-card bg-white rounded-4 p-4 d-flex align-items-center gap-3 shadow-sm h-100">
          <span style={{
            background: "#fef9c3",
            borderRadius: "50%",
            padding: 14,
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
          }}>
            <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="10" stroke="#facc15" strokeWidth="2"/>
              <path d="M12 8v4" stroke="#facc15" strokeWidth="2" strokeLinecap="round"/>
              <circle cx="12" cy="16" r="1" fill="#facc15"/>
            </svg>
          </span>
          <div>
            <div className="fw-bold" style={{fontSize: "1.25rem", color: "#222"}}>4</div>
            <div className="text-muted" style={{fontSize: "1rem"}}>High Risk Issues</div>
          </div>
        </div>
      </div>
      <div className="col-12 col-md-6 col-lg-3">
        <div className="result-stats-card bg-white rounded-4 p-4 d-flex align-items-center gap-3 shadow-sm h-100">
          <span style={{
            background: "#dcfce7",
            borderRadius: "50%",
            padding: 14,
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
          }}>
            <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="10" stroke="#22c55e" strokeWidth="2"/>
              <path d="M8 12l3 3 5-5" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </span>
          <div>
            <div className="fw-bold" style={{fontSize: "1.25rem", color: "#222"}}>6</div>
            <div className="text-muted" style={{fontSize: "1rem"}}>Resolved Issues</div>
          </div>
        </div>
      </div>
    </div>

    {/* Timeline + Pie Section */}
    <div className="row g-3 mb-4">
      {/* Timeline Graph Section */}
      <div className="col-12 col-lg-8">
        <div className="result-timeline-section bg-white rounded-4 p-2 p-md-4 h-100 shadow-sm">
          <div className="d-flex align-items-center mb-3">
            <span className="me-2" style={{color: "#6366F1", fontSize: 20}}>
              <svg width="20" height="20" fill="none" viewBox="0 0 24 24"><path d="M4 17V7a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v10" stroke="#6366F1" strokeWidth="2"/><path d="M8 13l4 4 4-4" stroke="#6366F1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </span>
            <span className="fw-semibold" style={{fontSize: "1.08rem"}}>Activity Timeline</span>
          </div>
          <div className="w-100" style={{minHeight: 180}}>
            <ResponsiveContainer width="100%" height={window.innerWidth < 576 ? 180 : 220}>
              <LineChart
                data={timelineData}
                margin={window.innerWidth < 576
                  ? { top: 5, right: 10, left: -20, bottom: 0 }
                  : { top: 10, right: 30, left: 0, bottom: 0 }
                }
              >
                <CartesianGrid stroke="#f3f4f6" />
                <XAxis dataKey="date" tick={{fontSize: 11}} axisLine={false} tickLine={false} />
                <YAxis yAxisId="left" domain={[60, 100]} tick={{fontSize: 11}} axisLine={false} tickLine={false} />
                <YAxis yAxisId="right" orientation="right" domain={[0, 10]} tick={{fontSize: 11}} axisLine={false} tickLine={false} />
                <Tooltip />
                <Legend verticalAlign="top" height={36} iconType="circle" wrapperStyle={{fontSize: window.innerWidth < 576 ? 11 : 13}} />
                <Line yAxisId="left" type="monotone" dataKey="score" name="Reputation Score" stroke="#6366F1" strokeWidth={3} dot={{r: 3}} activeDot={{r: 5}} />
                <Line yAxisId="right" type="monotone" dataKey="issues" name="Issues Detected" stroke="#22c55e" strokeWidth={3} dot={{r: 3}} activeDot={{r: 5}} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
      {/* Pie Chart Section */}
      <div className="col-12 col-lg-4">
        <div className="result-pie-section bg-white rounded-4 p-4 h-100 shadow-sm">
          <div className="d-flex align-items-center mb-3">
            <span style={{color: "#6366F1", fontSize: 20, marginRight: 8}}>
              <svg width="20" height="20" fill="none" viewBox="0 0 24 24"><path d="M4 17V7a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v10" stroke="#6366F1" strokeWidth="2"/><circle cx="12" cy="12" r="10" stroke="#6366F1" strokeWidth="2"/></svg>
            </span>
            <span className="fw-semibold" style={{fontSize: "1.08rem"}}>Issues by Platform</span>
          </div>
          <ResponsiveContainer width="100%" height={220}>
            <PieChart>
              <Pie
                data={pieData}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                innerRadius={55}
                outerRadius={80}
                paddingAngle={4}
                startAngle={90}
                endAngle={-270}
              >
                {pieData.map((entry, idx) => (
                  <Cell key={entry.name} fill={entry.color} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
          <div className="d-flex flex-column align-items-start mt-2" style={{fontSize: "0.97em"}}>
            {pieData.map((entry, idx) => (
              <div key={entry.name} className="d-flex align-items-center mb-1">
                <span style={{
                  display: "inline-block",
                  width: 12,
                  height: 12,
                  borderRadius: "50%",
                  background: entry.color,
                  marginRight: 8
                }}></span>
                <span style={{color: "#222", fontWeight: 500, marginRight: 6}}>{entry.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>

    {/* Filter/Search Bar Section */}
    <div className="result-filters-bar bg-white rounded-4 p-3 mb-4 d-flex flex-wrap align-items-center" style={{gap: 16, boxShadow: "0 1px 4px 0 rgba(16,24,40,0.04)", border: "1px solid #f1f5f9"}}>
      <div className="d-flex align-items-center flex-grow-1 mb-2 mb-md-0" style={{minWidth: 250}}>
        <span className="me-2" style={{color: "#94a3b8"}}>
          <svg width="18" height="18" fill="none" viewBox="0 0 20 20"><circle cx="9" cy="9" r="7" stroke="#94a3b8" strokeWidth="1.5"/><path d="M16 16l-3-3" stroke="#94a3b8" strokeWidth="1.5" strokeLinecap="round"/></svg>
        </span>
        <input
          className="form-control border-0 shadow-none px-2"
          style={{background: "transparent", fontSize: "1rem"}}
          placeholder="Search issues by content or context..."
        />
      </div>
      <div className="d-flex flex-wrap align-items-center gap-3 ms-auto">
        {/* Platform Dropdown */}
        <div style={{
          minWidth: 200,
          background: "#fff",
          border: "1.5px solid #e5e7eb",
          borderRadius: 10,
          padding: "0.25rem 0.75rem",
          display: "flex",
          alignItems: "center",
          fontSize: "1rem"
        }}>
          <span className="me-2" style={{color: "#64748b"}}>
            <svg width="18" height="18" fill="none" viewBox="0 0 20 20"><path d="M8.5 13.5v-3m3 3v-3m-7-4.5h11a1 1 0 0 1 .8 1.6l-4.4 6.2a2 2 0 0 1-3.2 0l-4.4-6.2A1 1 0 0 1 3.5 6z" stroke="#64748b" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </span>
          <select className="form-select border-0 shadow-none p-0" style={{background: "transparent", fontSize: "1rem"}}>
            <option>Platform: All</option>
          </select>
          <span className="ms-auto" style={{color: "#64748b"}}>
            <svg width="16" height="16" fill="none" viewBox="0 0 20 20"><path d="M6 8l4 4 4-4" stroke="#64748b" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </span>
        </div>
        {/* Sort Dropdown */}
        <div style={{
          minWidth: 200,
          background: "#fff",
          border: "1.5px solid #e5e7eb",
          borderRadius: 10,
          padding: "0.25rem 0.75rem",
          display: "flex",
          alignItems: "center",
          fontSize: "1rem"
        }}>
          <span className="me-2" style={{color: "#64748b"}}>
            <svg width="18" height="18" fill="none" viewBox="0 0 20 20"><path d="M8.5 6.5v3m3-3v3m-7 4.5h11a1 1 0 0 0 .8-1.6l-4.4-6.2a2 2 0 0 0-3.2 0l-4.4 6.2A1 1 0 0 0 3.5 13z" stroke="#64748b" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </span>
          <select className="form-select border-0 shadow-none p-0" style={{background: "transparent", fontSize: "1rem"}}>
            <option>Sort by: Severity</option>
          </select>
          <span className="ms-auto" style={{color: "#64748b"}}>
            <svg width="16" height="16" fill="none" viewBox="0 0 20 20"><path d="M6 8l4 4 4-4" stroke="#64748b" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </span>
        </div>
        {/* Time Dropdown */}
        <div style={{
          minWidth: 200,
          background: "#fff",
          border: "1.5px solid #e5e7eb",
          borderRadius: 10,
          padding: "0.25rem 0.75rem",
          display: "flex",
          alignItems: "center",
          fontSize: "1rem"
        }}>
          <span className="me-2" style={{color: "#64748b"}}>
            <svg width="18" height="18" fill="none" viewBox="0 0 20 20"><rect x="3" y="5" width="14" height="12" rx="2" stroke="#64748b" strokeWidth="1.5"/><path d="M7 3v2m6-2v2" stroke="#64748b" strokeWidth="1.5" strokeLinecap="round"/><path d="M3 9h14" stroke="#64748b" strokeWidth="1.5"/></svg>
          </span>
          <select className="form-select border-0 shadow-none p-0" style={{background: "transparent", fontSize: "1rem"}}>
            <option>Time: All Time</option>
          </select>
          <span className="ms-auto" style={{color: "#64748b"}}>
            <svg width="16" height="16" fill="none" viewBox="0 0 20 20"><path d="M6 8l4 4 4-4" stroke="#64748b" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </span>
        </div>
      </div>
    </div>

    {/* Issues Table Section */}
    <div className="result-issues-table-section bg-white rounded-4 p-0 mb-4 shadow-sm">
      <div className="p-3 border-bottom d-flex align-items-center flex-wrap">
        <input type="checkbox" className="form-check-input me-2" />
        <span className="me-3 small">Select All</span>
        <div className="d-flex gap-2 ms-auto flex-wrap">
          <button className="btn btn-outline-secondary btn-sm result-issue-action-btn" disabled>Auto-Fix Selected</button>
          <button className="btn btn-outline-secondary btn-sm result-issue-action-btn" disabled>Hide Selected</button>
          <button className="btn btn-outline-secondary btn-sm result-issue-action-btn" disabled>Mark as Reviewed</button>
          <button className="btn btn-outline-secondary btn-sm result-issue-action-btn" disabled>Export Selected</button>
        </div>
      </div>
      <div>
        {issues.map((issue, idx) => (
          <div
            key={idx}
            className="result-issue-row d-flex align-items-center rounded-3 border-bottom mt-3 px-3 py-3 flex-column flex-md-row"
            style={{
              borderLeft: `4px solid ${issue.borderColor}`,
              background: idx % 2 === 0 ? "#fff" : "#fcfcfd"
            }}
          >
            <input type="checkbox" className="form-check-input me-3 mb-2  mb-md-0" />
            <div className="flex-grow-1  w-100">
              <div className="d-flex align-items-center gap-2 mb-1 flex-wrap">
                {issue.tags.map(tag => (
                  <span
                    key={tag.name}
                    className="badge border d-flex align-items-center"
                    style={{
                      background: tag.name === "Twitter" ? "#e6f0fe"
                        : tag.name === "LinkedIn" ? "#e6f0fe"
                        : tag.name === "Reddit" ? "#fef3e6"
                        : "#f8fafc",
                      color: tag.color,
                      borderColor: "transparent",
                      fontWeight: 500,
                      fontSize: "0.95em",
                      padding: "0.25em 0.7em 0.25em 0.5em"
                    }}
                  >
                    {/* Platform Icon */}
                    {tag.name === "Twitter" && (
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="#2563eb" style={{marginRight: 4}}>
                        <path d="M22 5.924c-.793.352-1.645.59-2.54.698a4.48 4.48 0 0 0 1.963-2.475 8.93 8.93 0 0 1-2.828 1.082A4.48 4.48 0 0 0 11.07 9.03a12.72 12.72 0 0 1-9.23-4.68c-.4.687-.63 1.486-.63 2.34 0 1.615.822 3.04 2.073 3.876a4.47 4.47 0 0 1-2.03-.56v.057c0 2.257 1.607 4.142 3.74 4.57-.392.106-.805.163-1.23.163-.302 0-.593-.03-.877-.083.594 1.85 2.316 3.197 4.36 3.233A8.98 8.98 0 0 1 2 19.07a12.67 12.67 0 0 0 6.88 2.017c8.26 0 12.78-6.84 12.78-12.77 0-.195-.004-.39-.013-.583A9.1 9.1 0 0 0 24 4.59a8.99 8.99 0 0 1-2.6.713z"/>
                      </svg>
                    )}
                    {tag.name === "LinkedIn" && (
                      <span style={{
                        display: "inline-flex",
                        alignItems: "center",
                        justifyContent: "center",
                        width: 18,
                        height: 18,
                        borderRadius: "6px",
                        background: "#0a66c2",
                        marginRight: 4
                      }}>
                        <svg width="13" height="13" viewBox="0 0 32 32" fill="none">
                          <rect x="0" y="0" width="32" height="32" rx="8" fill="#0a66c2"/>
                          <path d="M9 13.5v9" stroke="#fff" strokeWidth="2" strokeLinecap="round"/>
                          <circle cx="9" cy="10" r="2" fill="#fff"/>
                          <path d="M16 17v5.5" stroke="#fff" strokeWidth="2" strokeLinecap="round"/>
                          <path d="M16 17c0-2 6-2.5 6 2.5v3" stroke="#fff" strokeWidth="2" strokeLinecap="round"/>
                        </svg>
                      </span>
                    )}
                    {tag.name === "Facebook" && (
                      <span style={{
                        display: "inline-flex",
                        alignItems: "center",
                        justifyContent: "center",
                        width: 18,
                        height: 18,
                        borderRadius: "6px",
                        background: "#1877f3",
                        marginRight: 4
                      }}>
                        <svg width="13" height="13" viewBox="0 0 32 32" fill="none">
                          <rect x="0" y="0" width="32" height="32" rx="8" fill="#1877f3"/>
                          <path d="M20 10h-2.5A2.5 2.5 0 0 0 15 12.5V14h-2v3h2v7h3v-7h2l.5-3H18v-1a.5.5 0 0 1 .5-.5H20v-3z" fill="#fff"/>
                        </svg>
                      </span>
                    )}
                    {tag.name === "Reddit" && (
                      <span style={{
                        display: "inline-flex",
                        alignItems: "center",
                        justifyContent: "center",
                        width: 18,
                        height: 18,
                        borderRadius: "50%",
                        background: "linear-gradient(135deg, #fc9842 0%, #fe5f75 100%)",
                        marginRight: 4
                      }}>
                        <svg width="13" height="13" viewBox="0 0 50 50" fill="none">
                          <circle cx="25" cy="25" r="20" fill="#fff"/>
                          <ellipse cx="19" cy="29" rx="3" ry="2" fill="#d93a00"/>
                          <ellipse cx="31" cy="29" rx="3" ry="2" fill="#d93a00"/>
                          <ellipse cx="25" cy="33" rx="5" ry="2.5" fill="#d93a00"/>
                          <circle cx="17" cy="22" r="1.5" fill="#d93a00"/>
                          <circle cx="33" cy="22" r="1.5" fill="#d93a00"/>
                          <path d="M25 17l2-8 8 2" stroke="#d93a00" strokeWidth="1.5" strokeLinecap="round"/>
                          <circle cx="35" cy="11" r="2" fill="#d93a00"/>
                        </svg>
                      </span>
                    )}
                    {tag.name}
                  </span>
                ))}
                <span className="text-muted small">{issue.date}</span>
              </div>
              <div className="fw-semibold" style={{fontSize: "1.04em"}}>{issue.content}</div>
            </div>
            <div className="ms-auto d-flex align-items-center gap-2 mt-2 mt-md-0">
              <span className="badge" style={{
                background: issue.labelColor,
                color: "#b91c1c",
                fontWeight: 500,
                fontSize: "0.85em",
                border: "1px solid #fca5a5"
              }}>{issue.label}</span>
              <button className="btn btn-link btn-sm text-muted p-0">
                <svg width="18" height="18" fill="none" viewBox="0 0 20 20"><path d="M7 8l3 3 3-3" stroke="#64748b" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </button>
            </div>
          </div>
        ))}
      </div>
      {/* Pagination */}
      <div className="d-flex justify-content-between align-items-center px-3 py-2 border-top bg-white flex-column flex-md-row gap-2">
        <span className="small text-muted">Showing 1 to 10 of 10 results</span>
        <nav>
          <ul className="pagination pagination-sm mb-0 flex-wrap" style={{borderRadius: "8px", overflow: "hidden", border: "1px solid #e5e7eb"}}>
            <li className="page-item">
              <button className="page-link" aria-label="Previous" style={{border: "none", background: "transparent"}}>
                <span aria-hidden="true">&lt;</span>
              </button>
            </li>
            <li className="page-item"><button className="page-link">1</button></li>
            <li className="page-item active">
              <span className="page-link" style={{color: "#6366F1", background: "#f5f7ff", border: "none"}}>2</span>
            </li>
            <li className="page-item"><button className="page-link">3</button></li>
            <li className="page-item"><button className="page-link">...</button></li>
            <li className="page-item"><button className="page-link">8</button></li>
            <li className="page-item">
              <button className="page-link" aria-label="Next" style={{border: "none", background: "transparent"}}>
                <span aria-hidden="true">&gt;</span>
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </div>

    {/* Export Options Section */}
    <div className="result-export-options-section bg-white rounded-4 p-3 p-md-4 mt-4">
      <div className="mb-3 d-flex align-items-center gap-2">
        <span style={{color: "#6366F1", fontSize: 20}}>
          <svg width="20" height="20" fill="none" viewBox="0 0 24 24">
            <path d="M4 17V7a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v10" stroke="#6366F1" strokeWidth="2"/>
            <path d="M8 13l4 4 4-4" stroke="#6366F1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </span>
        <span className="fw-semibold" style={{fontSize: "1.08rem"}}>Export Options</span>
      </div>
      <div className="row g-3">
        <div className="col-12 col-md-4">
          <div className="result-export-card border rounded-3 p-3 h-100 d-flex align-items-center gap-3">
            <span style={{background: "#EEF2FF", borderRadius: "50%", padding: 12, display: "flex", alignItems: "center"}}>
              <svg width="28" height="28" fill="none" viewBox="0 0 24 24">
                <rect x="4" y="4" width="16" height="16" rx="3" stroke="#6366F1" strokeWidth="2"/>
                <path d="M8 12h8M8 16h8" stroke="#6366F1" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </span>
            <div>
              <div className="fw-semibold">PDF Report</div>
              <div className="text-muted small">Complete analysis with visuals</div>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-4">
          <div className="result-export-card border rounded-3 p-3 h-100 d-flex align-items-center gap-3">
            <span style={{background: "#EEF2FF", borderRadius: "50%", padding: 12, display: "flex", alignItems: "center"}}>
              <svg width="28" height="28" fill="none" viewBox="0 0 24 24">
                <rect x="4" y="4" width="16" height="16" rx="3" stroke="#6366F1" strokeWidth="2"/>
                <path d="M9 9l6 6M15 9l-6 6" stroke="#6366F1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </span>
            <div>
              <div className="fw-semibold">Excel Spreadsheet</div>
              <div className="text-muted small">Raw data for further analysis</div>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-4">
          <div className="result-export-card border rounded-3 p-3 h-100 d-flex align-items-center gap-3">
            <span style={{background: "#EEF2FF", borderRadius: "50%", padding: 12, display: "flex", alignItems: "center"}}>
              <svg width="28" height="28" fill="none" viewBox="0 0 24 24">
                <rect x="4" y="4" width="16" height="16" rx="3" stroke="#6366F1" strokeWidth="2"/>
                <path d="M8 12h8" stroke="#6366F1" strokeWidth="2" strokeLinecap="round"/>
                <circle cx="12" cy="16" r="1" fill="#6366F1"/>
              </svg>
            </span>
            <div>
              <div className="fw-semibold">CSV Export</div>
              <div className="text-muted small">Compatible with most systems</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Result;