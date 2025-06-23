import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaDownload, FaFacebook, FaBuilding, FaTwitter, FaLinkedin, FaReddit } from "react-icons/fa";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";
import { Line, Bar, Doughnut } from "react-chartjs-2";





// Register chart components
ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  ArcElement,
  Tooltip,
  Legend
);

const TrendsHistory = () => {
  // Line Chart
  const lineData = {
    labels: [
      "Mar 15", "Mar 22", "Mar 29", "Apr 5", "Apr 12", "Apr 19", "Apr 26",
      "May 3", "May 10", "May 17", "May 24", "May 31", "Jun 7"
    ],
    datasets: [
      {
        label: "Reputation Score",
        data: [73, 75, 76, 75, 74, 77, 80, 85, 86, 84, 85, 87, 89],
        borderColor: "#007bff",
        backgroundColor: "rgba(0, 123, 255, 0.1)",
        fill: true,
        pointBackgroundColor: "#007bff",
        tension: 0.4
      }
    ]
  };

  const lineOptions = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        min: 60,
        max: 100,
        ticks: { stepSize: 10 }
      }
    },
    plugins: {
      legend: { display: false },
      tooltip: {
        callbacks: {
          label: context => `${context.parsed.y} pts`
        }
      }
    }
  };

  // Bar Chart
  const barData = {
    labels: ["Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Twitter",
        backgroundColor: "#00aaff",
        data: [9, 13, 9, 4],
      },
      {
        label: "LinkedIn",
        backgroundColor: "#0073b1",
        data: [4, 5, 3, 2],
      },
      {
        label: "Public Web",
        backgroundColor: "#f5a623",
        data: [3, 4, 2, 1],
      },
    ],
  };

  const barOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: "bottom",
        labels: {
          boxWidth: 12,
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  // Donut Chart
  const donutData = {
    labels: ["Auto Remediation (GPT)", "Manual Actions", "Remaining"],
    datasets: [
      {
        data: [4, 3, 3],
        backgroundColor: ["#007bff", "#a167f5", "#d3d3d3"],
        hoverOffset: 4,
      },
    ],
  };

  const donutOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: "right",
        labels: { boxWidth: 12 },
      },
    },
    cutout: "70%",
  };

  return (
    <div className="container bg-white py-3">
      {/* Header */}
      <div className="d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center">
        <div>
          <h5 className="fw-bold text-uppercase mb-1">Trends & History</h5>
          <small className="text-muted">Activity Timeline (Last 90 Days)</small>
        </div>

        <div className="d-flex gap-2 mt-3 mt-md-0">
          <select className="form-select form-select-sm w-auto">
            <option>Last 90 Days</option>
            <option>Last 30 Days</option>
            <option>Last 7 Days</option>
          </select>
          <button className="btn btn-outline-primary btn-sm d-flex align-items-center">
            <FaDownload className="me-1" /> Export Data
          </button>
        </div>
      </div>

      {/* Score Trend Chart */}
      <div className="card my-4">
        <div className="card-body">
          <div className="d-flex justify-content-between align-items-center mb-2">
            <h6 className="fw-bold mb-0">Reputation Score Trend</h6>
            <small className="text-success">+17 points increase over the last 90 days</small>
          </div>
          <div style={{ height: "300px" }}>
            <Line data={lineData} options={lineOptions} />
          </div>
        </div>
      </div>

      {/* Platform Signals & Cleanup Efficiency */}
      <div className="row">
        {/* Bar Chart */}
        <div className="col-md-6 mb-4">
          <div className="card h-100">
            <div className="card-body">
              <div className="d-flex justify-content-between align-items-center mb-2">
                <h6 className="fw-bold mb-0">Platform Signal Trends</h6>
                <small className="text-success">+62% flagged content</small>
              </div>
              <div style={{ height: "280px" }}>
                <Bar data={barData} options={barOptions} />
              </div>
            </div>
          </div>
        </div>

        {/* Donut Chart */}
        <div className="col-md-6 mb-4">
          <div className="card h-100">
            <div className="card-body">
              <div className="d-flex justify-content-between align-items-center mb-2">
                <h6 className="fw-bold mb-0">Cleanup Efficiency</h6>
                <small className="text-success">7/10 issues addressed</small>
              </div>
              <div style={{ height: "280px" }}>
                <Doughnut data={donutData} options={donutOptions} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="card mb-4">
        <div className="card-body">
          {/* Header & Filters */}
          <div className="d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center mb-3">
            <h6 className="fw-bold mb-2">Remediation History</h6>
            <div className="d-flex gap-2">
              <select className="form-select form-select-sm">
                <option>All Platforms</option>
              </select>
              <select className="form-select form-select-sm">
                <option>All Actions</option>
              </select>
            </div>
          </div>

          {/* History Entries */}
          <ul className="list-unstyled">
            <li className="mb-4">
              <div className="fw-bold">May 8, 2025 <span className="badge bg-primary ms-2">GPT</span></div>
              <div className="fw-semibold">‘CEO out of touch’ tweet reworded</div>
              <div className="text-muted small">
                Original tweet contained negative sentiment about company leadership. AI suggested rewording to maintain opinion while reducing reputational impact.
              </div>
              <div className="mt-1 small">
                <FaTwitter style={{ height: '30px', width: '30px', marginRight: '12px', color: '#1DA1F2' }} />

                <span className="text-twitter me-2">Twitter</span>
                <span className="text-success">Score impact: +6 pts</span>
              </div>
            </li>

            <li className="mb-4">
              <div className="fw-bold">May 3, 2025 <span className="badge bg-secondary ms-2">Manual</span></div>
              <div className="fw-semibold">Reddit NDA comment archived</div>
              <div className="text-muted small">
                Comment potentially revealed confidential information about upcoming product launch. Content was archived through legal request.
              </div>
              <div className="mt-1 small">
                <FaReddit style={{ height: '30px', width: '30px', marginRight: '12px', color: '#FF4500' }} />

                <span className="text-danger me-2">Reddit</span>
                <span className="text-success">Score impact: +3 pts</span>
              </div>
            </li>

            <li className="mb-4">
              <div className="fw-bold">Apr 25, 2025 <span className="badge bg-primary ms-2">GPT</span></div>
              <div className="fw-semibold">LinkedIn post privacy adjusted</div>
              <div className="text-muted small">
                Post contained potentially sensitive information about work environment. AI suggested privacy setting changes and content edits.
              </div>
              <div className="mt-1 small">
                <FaLinkedin style={{ height: '30px', width: '30px', marginRight: '12px', color: '#0077B5' }} />

                <span className="text-info me-2">LinkedIn</span>
                <span className="text-success">Score impact: +2 pts</span>
              </div>
            </li>

            <li className="mb-4">
              <div className="fw-bold">Apr 18, 2025 <span className="badge bg-primary ms-2">GPT</span></div>
              <div className="fw-semibold">Facebook comment tone improved</div>
              <div className="text-muted small">
                Comment on industry news article had overly negative tone. AI suggested rewording to maintain opinion while improving professionalism.
              </div>
              <div className="mt-1 small">
                <FaFacebook style={{ color: '#1877F2', height: '30px', width: '30px', marginRight: '12px' }} />
                <span className="text-primary me-2">Facebook</span>
                <span className="text-success">Score impact: +1 pt</span>
              </div>
            </li>

            <li className="mb-3">
              <div className="fw-bold">Apr 10, 2025 <span className="badge bg-secondary ms-2">Manual</span></div>

              <div className="fw-semibold">Glassdoor review response added</div>
              <div className="text-muted small">
                Negative review about work-life balance received a thoughtful response acknowledging concerns and outlining improvement initiatives.
              </div>
              <div className="mt-1 small">
                <FaBuilding style={{ color: '#0CAA41', fontSize: 24 }} />
                <span className="text-success me-2">Glassdoor</span>
                <span className="text-success">Score impact: +2 pts</span>
              </div>
            </li>
          </ul>

          {/* Load More */}
          <div className="text-center">
            <a href="#" className="small text-primary">Load More History</a>
          </div>



        </div>

      </div>
      {/* Action Buttons */}
      <div className="d-flex justify-content-between align-items-center mt-3">
        <button className="btn btn-outline-secondary btn-sm">Download Activity Log</button>
        <button className="btn btn-primary btn-sm">Share Progress</button>
      </div>
    </div>
  );
};

export default TrendsHistory;
