import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const UpgradePlan = () => ( 
  <div className="container py-5">
    {/* Header Section */}
    <div className="text-center mb-5">
      <h2 className="fw-bold">Upgrade to Pro with Auto-Fix</h2>
      <p className="text-muted">
        Automatically fix reputation issues and maintain a pristine online presence with our advanced AI-powered tools.
      </p>
      <div className="d-inline-flex gap-2 mt-3">
        <button className="btn btn-outline-primary btn-sm active">Monthly</button>
        <button className="btn btn-outline-secondary btn-sm">Annual <span className="badge bg-success">Save 20%</span></button>
      </div>
    </div>

    {/* Pricing Plans */}
    <div className="row justify-content-center mb-5">
      {/* Basic Plan */}
      <div className="col-md-4 mb-3">
        <div className="card h-100 shadow-sm position-relative">
          {/* Current Plan badge above heading */}
          <span className="position-absolute top-0 start-50 translate-middle badge rounded-pill bg-secondary" style={{zIndex:1, marginTop: '-15px'}}>Current Plan</span>
          <div className="card-body ">
            <h5 className="card-title">Basic</h5>
            <h2 className="fw-bold">$0 <small className="text-muted fs-6">/month</small></h2>
            <ul className="list-unstyled mt-3 mb-4">
              <li>✔️ Basic reputation monitoring</li>
              <li>✔️ 1 scan report</li>
              <li>✔️ Manual issue resolution</li>
              <li className="text-muted">❌ Auto-Fix functionality</li>
              <li className="text-muted">❌ Advanced AI insights</li>
            </ul>
            <button className="btn btn-outline-primary w-100">Current Plan</button>
          </div>
        </div>
      </div>
      {/* Pro Plan */}
      <div className="col-md-4 mb-3">
        <div className="card h-100 border-primary shadow-lg position-relative">
          <span className="position-absolute top-0 start-50 translate-middle badge rounded-pill bg-primary" style={{zIndex:1, marginTop: '-15px'}}>Recommended</span>
          <div className="card-body">
            <h5 className="card-title">Pro</h5>
            <h2 className="fw-bold">$29 <small className="text-muted fs-6">/month</small></h2>
            <ul className="list-unstyled mt-3 mb-4">
              <li>✔️ Everything in Basic</li>
              <li>✔️ Monthly comprehensive scans</li>
              <li>✔️ Auto-Fix for reputation issues</li>
              <li>✔️ Advanced AI insights & recommendations</li>
              <li>✔️ Priority support</li>
            </ul>
            <button className="btn btn-primary w-100">Upgrade Now</button>
          </div>
        </div>
      </div>
      {/* Enterprise Plan */}
      <div className="col-md-4 mb-3">
        <div className="card h-100 shadow-sm">
          <div className="card-body">
            <h5 className="card-title">Enterprise</h5>
            <h2 className="fw-bold">$99 <small className="text-muted fs-6">/month</small></h2>
            <ul className="list-unstyled mt-3 mb-4">
              <li>✔️ Everything in Pro</li>
              <li>✔️ Real-time monitoring & alerts</li>
              <li>✔️ Dedicated account manager</li>
              <li>✔️ Custom reporting & integrations</li>
              <li>✔️ 24/7 priority support</li>
            </ul>
            <button className="btn btn-outline-primary w-100">Contact Sales</button>
          </div>
        </div>
      </div>
    </div>

    {/* How Auto-Fix Works Section */}
    <div className="bg-light rounded-4 p-5 mt-5">
      <h3 className="text-center mb-5 fw-bold">How Auto-Fix Works</h3>
      <div className="row text-center">
        <div className="col-md-4 mb-4">
          <div className="mb-3">
            <span style={{
              display: "inline-block",
              background: "#EEF2FF",
              borderRadius: "50%",
              padding: 18
            }}>
              {/* Detection Icon */}
              <svg width="36" height="36" fill="none" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10" stroke="#6366F1" strokeWidth="2"/>
                <path d="M12 8v4" stroke="#6366F1" strokeWidth="2" strokeLinecap="round"/>
                <circle cx="12" cy="16" r="1" fill="#6366F1"/>
              </svg>
            </span>
          </div>
          <h5 className="fw-bold">1. Detection</h5>
          <p className="text-muted">
            Our AI constantly monitors your online presence across platforms to identify potential reputation issues.
          </p>
        </div>
        <div className="col-md-4 mb-4">
          <div className="mb-3">
            <span style={{
              display: "inline-block",
              background: "#EEF2FF",
              borderRadius: "50%",
              padding: 18
            }}>
              {/* Analysis Icon */}
              <svg width="36" height="36" fill="none" viewBox="0 0 24 24">
                <rect x="5" y="5" width="14" height="14" rx="4" stroke="#6366F1" strokeWidth="2"/>
                <path d="M9 17V13M12 17V9M15 17V15" stroke="#6366F1" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </span>
          </div>
          <h5 className="fw-bold">2. Analysis</h5>
          <p className="text-muted">
            Advanced algorithms analyze the severity, reach, and potential impact of each issue on your reputation.
          </p>
        </div>
        <div className="col-md-4 mb-4">
          <div className="mb-3">
            <span style={{
              display: "inline-block",
              background: "#EEF2FF",
              borderRadius: "50%",
              padding: 18
            }}>
              {/* Auto-Fix Icon */}
              <svg width="36" height="36" fill="none" viewBox="0 0 24 24">
                <path d="M12 17l5-5-1.41-1.41L13 13.17V7h-2v6.17l-2.59-2.58L7 12l5 5z" fill="#6366F1"/>
                <circle cx="12" cy="12" r="10" stroke="#6366F1" strokeWidth="2"/>
              </svg>
            </span>
          </div>
          <h5 className="fw-bold">3. Auto-Fix</h5>
          <p className="text-muted">
            Our system automatically implements the optimal solution to address and remediate the issue.
          </p>
        </div>
      </div>
    </div>

    {/* See Auto-Fix in Action Section */}
    <div className="autofix-action-section bg-white rounded-4 p-4 my-5" style={{border: "1.5px solid #f3f4f6"}}>
      <h4 className="fw-bold mb-4 text-center">See Auto-Fix in Action</h4>
      <div className="row g-4 mb-4">
        {/* Before Auto-Fix */}
        <div className="col-md-6">
          <div className="autofix-before-card p-3 rounded-3 h-100" style={{background: "#f9fafb", border: "1px solid #f3f4f6"}}>
            {/* Heading with icon and subtext */}
            <div className="mb-2">
              <div className="d-flex align-items-center gap-2 fw-semibold" style={{fontSize: "1.08rem"}}>
                <span style={{display: "flex", alignItems: "center", justifyContent: "center", background: "#fee2e2", borderRadius: "50%", width: 28, height: 28}}>
                  <svg width="18" height="18" fill="none" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="10" stroke="#f87171" strokeWidth="2"/>
                    <path d="M12 8v4" stroke="#f87171" strokeWidth="2" strokeLinecap="round"/>
                    <circle cx="12" cy="16" r="1" fill="#f87171"/>
                  </svg>
                </span>
                Before Auto-Fix
              </div>
              <div className="text-muted small ms-4">Negative Twitter mention detected</div>
            </div>
            {/* Tweet box with Twitter icon and badge */}
            <div className="autofix-tweet-box p-3 rounded-2 mb-2" style={{background: "#fee2e2"}}>
              <div className="d-flex align-items-center gap-2 mb-2">
                <span style={{color: "#1da1f2"}}>
                  <svg width="16" height="16" fill="currentColor" viewBox="0 0 16 16"><path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.009-.422A6.673 6.673 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.084.797A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115c-.212 0-.417-.021-.616-.061a3.293 3.293 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/></svg>
                </span>
                <span className="badge bg-danger" style={{fontSize: "0.85em"}}>High Risk</span>
              </div>
              <div className="text-dark" style={{fontSize: "0.97em"}}>
                "Company’s customer service is terrible! Been trying to get help for weeks. #BadService #Frustrated"
              </div>
            </div>
            <div className="text-danger small d-flex align-items-center mt-1">
              <svg width="16" height="16" fill="none" viewBox="0 0 16 16" className="me-1"><circle cx="8" cy="8" r="7" stroke="#f87171" strokeWidth="1.5"/><path d="M8 5v3" stroke="#f87171" strokeWidth="1.5" strokeLinecap="round"/><circle cx="8" cy="11" r="1" fill="#f87171"/></svg>
              Potential reputation damage: -8 points
            </div>
          </div>
        </div>
        {/* After Auto-Fix */}
        <div className="col-md-6">
          <div className="autofix-after-card p-3 rounded-3 h-100" style={{background: "#f9fafb", border: "1px solid #f3f4f6"}}>
            {/* Heading with icon and subtext */}
            <div className="mb-2">
              <div className="d-flex align-items-center gap-2 fw-semibold" style={{fontSize: "1.08rem"}}>
                <span style={{display: "flex", alignItems: "center", justifyContent: "center", background: "#dcfce7", borderRadius: "50%", width: 28, height: 28}}>
                  <svg width="18" height="18" fill="none" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="10" stroke="#22c55e" strokeWidth="2"/>
                    <path d="M8 12l3 3 5-5" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
                After Auto-Fix
              </div>
              <div className="text-muted small ms-4">Issue resolved automatically</div>
            </div>
            {/* Tweet box with Twitter icon and badge */}
            <div className="autofix-tweet-box p-3 rounded-2 mb-2" style={{background: "#dcfce7"}}>
              <div className="d-flex align-items-center gap-2 mb-2">
                <span style={{color: "#1da1f2"}}>
                  <svg width="16" height="16" fill="currentColor" viewBox="0 0 16 16"><path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.009-.422A6.673 6.673 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.084.797A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115c-.212 0-.417-.021-.616-.061a3.293 3.293 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/></svg>
                </span>
                <span className="badge bg-success" style={{fontSize: "0.85em"}}>Resolved</span>
              </div>
              <div className="text-dark" style={{fontSize: "0.97em"}}>
                "Thanks for reaching out! Our team has resolved your issue and provided compensation for the inconvenience. #CustomerCare"
              </div>
            </div>
            <div className="text-success small d-flex align-items-center mt-1">
              <svg width="16" height="16" fill="none" viewBox="0 0 16 16" className="me-1"><circle cx="8" cy="8" r="7" stroke="#22c55e" strokeWidth="1.5"/><path d="M5 9l2 2 4-4" stroke="#22c55e" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              Reputation protected: +2 points gained
            </div>
          </div>
        </div>
      </div>
      {/* Stats */}
      <div className="row text-center g-3">
        <div className="col-md-4">
          <div className="autofix-stat-box p-3 rounded-3 h-100" style={{background: "#f9fafb"}}>
            <div className="fw-bold" style={{fontSize: "2rem", color: "#6366F1"}}>94%</div>
            <div className="text-muted" style={{fontSize: "1.07rem"}}>of issues resolved automatically without manual intervention</div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="autofix-stat-box p-3 rounded-3 h-100" style={{background: "#f9fafb"}}>
            <div className="fw-bold" style={{fontSize: "2rem", color: "#6366F1"}}>3.5x</div>
            <div className="text-muted" style={{fontSize: "1.07rem"}}>faster response time compared to manual remediation</div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="autofix-stat-box p-3 rounded-3 h-100" style={{background: "#f9fafb"}}>
            <div className="fw-bold" style={{fontSize: "2rem", color: "#6366F1"}}>+15</div>
            <div className="text-muted" style={{fontSize: "1.07rem"}}>average reputation score improvement after 30 days</div>
          </div>
        </div>
      </div>
    </div>
    {/* End See Auto-Fix in Action Section */}

    {/* Feature Comparison Section */}
    <div className="feature-comparison-section bg-white rounded-4 p-4 my-5" style={{border: "1.5px solid #f3f4f6"}}>
      <h4 className="fw-bold mb-4 text-center">Feature Comparison</h4>
      <div className="table-responsive">
        <table className="table align-middle text-center mb-0 feature-comparison-table" style={{minWidth: 700}}>
          <thead>
            <tr>
              <th className="text-start" style={{background: "#fff", border: "none"}}>Features</th>
              <th style={{background: "#fff", border: "none"}}>Basic</th>
              <th style={{background: "#EEF2FF", color: "#6366F1", border: "none", fontWeight: 700, fontSize: "1.1em"}}>Pro</th>
              <th style={{background: "#fff", border: "none"}}>Enterprise</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="text-start">Reputation Monitoring</td>
              <td>Basic</td>
              <td style={{background: "#EEF2FF"}}>Advanced</td>
              <td>Comprehensive</td>
            </tr>
            <tr>
              <td className="text-start">Scan Frequency</td>
              <td>Weekly</td>
              <td style={{background: "#EEF2FF"}}>Daily</td>
              <td>Real-time</td>
            </tr>
            <tr>
              <td className="text-start">
                Auto-Fix Technology <span title="Automatically resolves issues using AI" style={{cursor:"pointer"}}>🛈</span>
              </td>
              <td>✕</td>
              <td style={{background: "#EEF2FF"}}>✔</td>
              <td>✔</td>
            </tr>
            <tr>
              <td className="text-start">AI Response Templates</td>
              <td>✕</td>
              <td style={{background: "#EEF2FF"}}>✔</td>
              <td>✔</td>
            </tr>
            <tr>
              <td className="text-start">Platforms Monitored</td>
              <td>3</td>
              <td style={{background: "#EEF2FF"}}>15+</td>
              <td>Unlimited</td>
            </tr>
            <tr>
              <td className="text-start">Historical Data</td>
              <td>30 days</td>
              <td style={{background: "#EEF2FF"}}>1 year</td>
              <td>Unlimited</td>
            </tr>
            <tr>
              <td className="text-start">Priority Support</td>
              <td>✕</td>
              <td style={{background: "#EEF2FF"}}>✔</td>
              <td>✔</td>
            </tr>
            <tr>
              <td className="text-start">Dedicated Account Manager</td>
              <td>✕</td>
              <td style={{background: "#EEF2FF"}}>✕</td>
              <td>✔</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    {/* CTA Section */}
    <div className="cta-protection-section rounded-4 p-5 my-5 text-center" style={{background: "#6366F1"}}>
      <h4 className="fw-bold mb-3 text-white">Ready to Protect Your Reputation?</h4>
      <div className="mb-3 text-white" style={{fontSize: "1.08rem"}}>
        Join thousands of professionals who trust Auto-Fix to maintain their online reputation. Upgrade today and let AI handle the hard work.
      </div>
      <div className="d-flex flex-column flex-md-row justify-content-center align-items-center gap-3 mb-3">
        <button className="btn btn-light fw-semibold px-4 py-2">Upgrade to Pro Now</button>
        <a href="#" className="btn btn-link text-white fw-semibold px-4 py-2">Return to Dashboard <span aria-hidden="true">&rarr;</span></a>
      </div>
      <div className="d-flex flex-column flex-md-row justify-content-center align-items-center gap-3 text-white-50 small">
        <span>✓ 14-day money-back guarantee</span>
        <span>✓ Cancel anytime</span>
        <span>✓ 24/7 support</span>
      </div>
    </div>
  </div>
);

export default UpgradePlan;