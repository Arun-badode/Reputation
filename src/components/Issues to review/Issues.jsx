import React from 'react'
import './Issues.css'

export const Issues = () => {
  return (
   <div className="container bg-white py-4">
  <div className="d-flex justify-content-between align-items-center mb-3">
    <h5 className="mb-0 fw-bold">ISSUES TO REVIEW</h5>
    <div>
      <p style={{ fontSize: 15 }}>Total issues:7 | Last Updated: june 9 2025</p>
    </div>
  </div>
  <div className="d-flex justify-content-between align-items-center mb-3">
    <div>
      <button type="button" className="btn btn-primary me-2 mt-1 ">
        <i className="fa-solid fa-arrow-down" /> Download Risk Report PDF
      </button>
      <button className="btn btn-outline-secondary mt-1 ">
        <i className="fa-solid fa-arrows-rotate" /> Refresh
      </button>
    </div>
    <div>
      <button
        className="btn  "
        style={{
          backgroundImage:
            "linear-gradient(to right, rgb(207, 106, 233) , rgb(147, 5, 160))",
          color: "white"
        }}
      >
        Upgrade for Auto-Fix
      </button>
    </div>
  </div>
  <div className="row mb-3">
    <div className="col-md-6 mt-1">
      <input
        type="text"
        className="form-control"
        placeholder="Search issues..."
      />
    </div>
    <div className="col-md-6 text-end header-controls">
      <button className="btn btn-outline-secondary mt-1">
        <i className="fa-solid fa-circle-notch" /> Sort by: Priority
      </button>
      <button className="btn btn-outline-secondary mt-1">
        <i className="fa-solid fa-filter" /> Filter
      </button>
      <button className="btn btn-outline-secondary mt-1">
        <i className="fa-solid fa-calendar" /> Date Range
      </button>
    </div>
  </div>
  <div className="issue-card issue-card-high">
    <div className="d-flex justify-content-between">
      <div>
        <strong>Twitter</strong>{" "}
        <small className="text-muted">August 2022</small>
        <p className="mt-2">"This company's policies are a joke."</p>
        <div
          className="issue-suggestion"
          style={{
            background: "#eef4ff",
            padding: 10,
            borderRadius: 6,
            fontSize: 14
          }}
        >
          <strong>Suggestion:</strong> Reword to sound constructive. Consider
          addressing specific policy concerns professionally.
        </div>
        <div className="mt-2">
          <button className="btn btn-outline-secondary me-2  mt-1 ">
            <i className="fa-solid  fa-eye" /> View Post
          </button>
          <button className="btn btn-primary mt-1  me-2">
            <i className="fa-solid fa-print" /> GPT Rewrite
          </button>
          <button className="btn btn-outline-danger mt-1 me-2">
            <i className="fa-solid fa-trash" /> Deletion Guide
          </button>
        </div>
      </div>
      <div>
        <span className="risk-tag risk-high">Risk: 5/5</span>
      </div>
    </div>
  </div>
  <div className="issue-card issue-card-high">
    <div className="d-flex justify-content-between">
      <div>
        <strong>Public Web</strong>{" "}
        <small className="text-muted">June 2021</small>
        <p className="mt-2">"Got sued for NDA violation"</p>
        <button className="btn btn-outline-secondary me-2 mt-1">
          <i className="fa-solid fa-eye" /> View Source
        </button>
        <button className="btn btn-primary mt-1 ">
          <i className="fa-solid fa-print" /> GPT Clarity
        </button>
      </div>
      <div>
        <span className="risk-tag risk-high">Risk: 4/5</span>
      </div>
    </div>
  </div>
  <div className="issue-card issue-card-medium">
    <div className="d-flex justify-content-between">
      <div>
        <strong>LinkedIn</strong>{" "}
        <small className="text-muted">January 2022</small>
        <p className="mt-2">
          "Unfair interview process with biased questions..."
        </p>
        <button className="btn btn-outline-secondary me-2  mt-1">
          <i className="fa-solid fa-eye" /> View Post
        </button>
        <button className="btn btn-primary me-2 mt-1 ">
          <i className="fa-solid fa-pen-to-square" /> Rewrite
        </button>
        <button className="btn btn-outline-secondary  mt-1">
          <i className="fa-solid fa-clock" /> Snooze
        </button>
      </div>
      <div>
        <span className="risk-tag risk-medium">Risk: 3/5</span>
      </div>
    </div>
  </div>
  <div className="issue-card issue-card-medium">
    <div className="d-flex justify-content-between">
      <div>
        <strong>Blog</strong> <small className="text-muted">March 2020</small>
        <p className="mt-2">
          "Controversial opinion about industry standards that could be
          misinterpreted..."
        </p>
        <button className="btn btn-outline-secondary me-2 mt-1">
          <i className="fa-solid fa-eye"> </i> View Blog
        </button>
        <button className="btn btn-primary me-2 mt-1 ">
          <i className="fa-solid fa-pen-to-square" /> Rewrite
        </button>
        <button className="btn btn-outline-secondary mt-1 ">
          <i className="fa-solid fa-clock" /> Snooze
        </button>
      </div>
      <div>
        <span className="risk-tag risk-medium">Risk: 3/5</span>
      </div>
    </div>
  </div>
  <div className="issue-card issue-card-medium">
    <div className="d-flex justify-content-between">
      <div>
        <strong>Reddit</strong>{" "}
        <small className="text-muted">February 2022</small>
        <p className="mt-2">
          "Biased hiring post suggesting preference for certain demographics..."
        </p>
        <button className="btn btn-outline-secondary me-2 mt-1 ">
          <i className="fa-solid fa-eye"> </i> View Source
        </button>
        <button className="btn btn-primary  me-2 mt-1">
          <i className="fa-solid fa-print" /> GPT Fix
        </button>
        <button className="btn btn-outline-secondary mt-1 ">
          <i className="fa-solid fa-clock" /> Snooze
        </button>
      </div>
      <div>
        <span className="risk-tag risk-medium">Risk: 3/5</span>
      </div>
    </div>
  </div>
  <div className="issue-card issue-card-low">
    <div className="d-flex justify-content-between">
      <div>
        <strong>LinkedIn</strong> <small className="text-muted">2021</small>
        <p className="mt-2">
          Old job description contains outdated company information and
          responsibilities
        </p>
        <button className="btn btn-outline-secondary me-2 mt-1">
          <i className="fa-solid fa-eye"> </i> View
        </button>
        <button className="btn btn-primary mt-1 me-2 ">
          <i className="fa-solid fa-pen-to-square" /> Rewrite
        </button>
        <button className="btn btn-outline-secondary mt-1 ">
          <i className="fa-solid fa-clock" /> Snooze
        </button>
      </div>
      <div>
        <span className="risk-tag risk-low">Risk: 2/5</span>
      </div>
    </div>
  </div>
  <div className="issue-card issue-card-low">
    <div className="d-flex justify-content-between">
      <div>
        <strong>Public Web</strong> <small className="text-muted">2019</small>
        <p className="mt-2">
          Mention in outdated industry article with minor factual inaccuracies
          about your role
        </p>
        <button className="btn btn-outline-secondary me-2  mt-1">
          <i className="fa-solid fa-eye"> </i> View Article
        </button>
        <button className="btn btn-outline-secondary mt-1 ">
          <i className="fa-solid fa-clock" />
          Snooze
        </button>
      </div>
      <div>
        <span className="risk-tag risk-low">Risk: 1/5</span>
      </div>
    </div>
  </div>
  <div className="text-center mt-3">
    <button className="btn btn-outline-primary  ">Show More Results</button>
  </div>
  <div className="d-flex justify-content-between align-items-center mt-4">
    <div>
      <p className="mb-1">
        Total: <strong>7 Issues</strong>
      </p>
      <p className="mb-0">2 High · 3 Medium · 2 Low</p>
    </div>
    <div className="text-end">
      <p className="mb-1">
        Average Risk: <strong>Medium</strong>
      </p>
      <button className="btn btn-outline-secondary me-2 mt-1 ">
        Download Summary
      </button>
      <button className="btn btn-outline-primary mt-1 ">View Trends</button>
    </div>
  </div>
</div>
  )
}
