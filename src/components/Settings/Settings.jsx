import React, { useState } from 'react';
import { Tabs, Tab, Container, Form, Button, Col, Row, Card, Badge } from 'react-bootstrap';
import { FaFileInvoice, FaCreditCard } from "react-icons/fa";


import { FaTwitter, FaLinkedin, FaReddit, FaGoogle, FaUserFriends, FaInstagram } from "react-icons/fa"; // Add these to imports


const Settings = () => {
  const [key, setKey] = useState('profile');
  const [links, setLinks] = useState([
    "https://linkedin.com/in/alexjohnson",
    "https://twitter.com/alexj"
  ]);
  const [aliases, setAliases] = useState(["AJ", "Alex J."]);

  const removeLink = (index) => {
    setLinks(links.filter((_, i) => i !== index));
  };

  const addLink = () => {
    setLinks([...links, ""]);
  };

  const handleLinkChange = (index, value) => {
    const updatedLinks = [...links];
    updatedLinks[index] = value;
    setLinks(updatedLinks);
  };

  const removeAlias = (index) => {
    setAliases(aliases.filter((_, i) => i !== index));
  };

  const addAlias = () => {
    setAliases([...aliases, ""]);
  };

  const handleAliasChange = (index, value) => {
    const updated = [...aliases];
    updated[index] = value;
    setAliases(updated);
  };


  return (
    <Container className="  bg-white">
      <h3 className="mb-4">Settings</h3>

      <Tabs
        id="settings-tabs"
        activeKey={key}
        onSelect={(k) => setKey(k)}
        className="mb-3"
        justify
      >
        <Tab eventKey="profile" title="User Profile & Scan Context">
          <div className="container mt-4">
            <h5>User Profile & Scan Context</h5>
            <Form className="mt-3">
              <Row className="mb-3">
                <Col md={6}>
                  <Form.Label>Name</Form.Label>
                  <Form.Control defaultValue="Alex Johnson" />
                </Col>
                <Col md={6}>
                  <Form.Label>Email</Form.Label>
                  <Form.Control defaultValue="alex.johnson@example.com" />
                </Col>
              </Row>

              <Row className="mb-3">
                <Col md={6}>
                  <Form.Label>Date of Birth</Form.Label>
                  <Form.Control type="date" defaultValue="1985-06-15" />
                </Col>
                <Col md={6}>
                  <Form.Label>Location</Form.Label>
                  <Form.Control defaultValue="San Francisco, CA" />
                </Col>
              </Row>

              <Row className="mb-3">
                <Col md={6}>
                  <Form.Label>Industry</Form.Label>
                  <Form.Select defaultValue="Technology">
                    <option>Technology</option>
                    <option>Healthcare</option>
                    <option>Finance</option>
                    <option>Education</option>
                  </Form.Select>
                </Col>
                <Col md={6}>
                  <Form.Label>Language</Form.Label>
                  <Form.Select defaultValue="English">
                    <option>English</option>
                    <option>Hindi</option>
                    <option>Spanish</option>
                  </Form.Select>
                </Col>
              </Row>

              {/* Public Links */}
              <Form.Label>Public Links</Form.Label>
              {links.map((link, idx) => (
                <div className="d-flex mb-2" key={idx}>
                  <Form.Control
                    value={link}
                    onChange={(e) => handleLinkChange(idx, e.target.value)}
                  />
                  <Button variant="link" onClick={() => removeLink(idx)} className="text-danger">✖</Button>
                </div>
              ))}
              <Button variant="link" onClick={addLink}>+ Add Link</Button>

              {/* Aliases */}
              <Form.Label className="mt-3">Aliases/Nicknames</Form.Label>
              {aliases.map((alias, idx) => (
                <div className="d-flex mb-2" key={idx}>
                  <Form.Control
                    value={alias}
                    onChange={(e) => handleAliasChange(idx, e.target.value)}
                  />
                  <Button variant="link" onClick={() => removeAlias(idx)} className="text-danger">✖</Button>
                </div>
              ))}
              <Button variant="link" onClick={addAlias}>+ Add Alias</Button>

              {/* Keywords */}
              <Form.Group className="mt-4">
                <Form.Label>Keywords to Monitor</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={2}
                  defaultValue="Alex Johnson, RegulationGuard, reputation management, digital privacy, online presence"
                  placeholder="Separate keywords with commas..."
                />
              </Form.Group>

              <div className="d-flex justify-content-end mt-3">
                <Button variant="primary">Save Info</Button>
              </div>
            </Form>
          </div>

        </Tab>

        <Tab eventKey="accounts" title="Connected Accounts">
          <div className="container mt-4">
            <h5>Connected Accounts & Integrations</h5>
            <Row className="mt-4 gy-3">
              <Col md={6}>
                <Card className="p-3 d-flex justify-content-between align-items-center flex-row">
                  <div className="d-flex align-items-center">
                    <FaTwitter style={{ height: '30px', width: '30px', marginRight: '12px', color: '#1DA1F2' }} />

                    <div>
                      <strong>Twitter</strong>
                      <div className="text-success">🟢 Connected</div>
                    </div>
                  </div>
                  <Button variant="link text-decoration-none text-dark">Reauthorize</Button>
                </Card>
              </Col>

              <Col md={6}>
                <Card className="p-3 d-flex justify-content-between align-items-center flex-row">
                  <div className="d-flex align-items-center">
                    <FaLinkedin style={{ height: '30px', width: '30px', marginRight: '12px', color: '#0077B5' }} />

                    <div>
                      <strong>LinkedIn</strong>
                      <div className="text-danger">🔴 Not Connected</div>
                    </div>
                  </div>
                  <Button variant="primary">Connect</Button>
                </Card>
              </Col>

              <Col md={6}>
                <Card className="p-3 d-flex justify-content-between align-items-center flex-row">
                  <div className="d-flex align-items-center">
                    <FaReddit style={{ height: '30px', width: '30px', marginRight: '12px', color: '#FF4500' }} />

                    <div>
                      <strong>Reddit API</strong>
                      <div className="text-success">🟢 Connected</div>
                    </div>
                  </div>
                  <Button variant="link text-decoration-none text-dark">Refresh Key</Button>
                </Card>
              </Col>

              <Col md={6}>
                <Card className="p-3 d-flex justify-content-between align-items-center flex-row">
                  <div className="d-flex align-items-center">
                    <FaInstagram style={{ height: '30px', width: '30px', marginRight: '12px', color: '#E1306C' }} />
                    <div>
                      <strong>Threads (via Meta)</strong>
                      <div className="text-danger">🔴 Not Connected</div>
                    </div>
                  </div>
                  <Button variant="primary">Connect</Button>
                </Card>
              </Col>

              <Col md={6}>
                <Card className="p-3 d-flex justify-content-between align-items-center flex-row">
                  <div className="d-flex align-items-center">
                    <FaGoogle style={{ height: '30px', width: '30px', marginRight: '12px', color: '	#DB4437' }} />
                    <div>
                      <strong>Google Search API</strong>
                      <div className="text-success">🟢 Connected</div>
                    </div>
                  </div>
                  <Button variant="link text-decoration-none text-dark">Refresh Key</Button>
                </Card>
              </Col>

              <Col md={6}>
                <Card className="p-3 d-flex justify-content-between align-items-center flex-row">
                  <div className="d-flex align-items-center">
                    <FaUserFriends style={{ height: '30px', width: '30px', marginRight: '12px', color: '#4A4A4A' }} />
                    <div>
                      <strong>People Data API</strong>
                      <div className="text-danger">🔴 Not Connected</div>
                    </div>
                  </div>
                  <Button variant="primary">Connect</Button>
                </Card>
              </Col>
            </Row>

            <Form className="d-flex align-items-center gap-2 mt-4">
              <Form.Control type="text" placeholder="alexjohnson.com" />
              <Button variant="primary">Verify</Button>
            </Form>

            <div className="d-flex justify-content-between mt-3">
              <Button variant="primary">Sync All</Button>
              <Button variant="outline-secondary">View Permissions</Button>
            </div>
          </div>

        </Tab>

        <Tab eventKey="gpt" title="AI & GPT Preferences">
          <div className="container mt-4">

            <div className="bg-light p-4 mt-3 rounded shadow-sm">
              <h6 className="mb-4">AI & GPT Preferences</h6>

              <Form>
                <div className="d-flex justify-content-between align-items-center mb-4">
                  <div>
                    <strong>Auto-rewrite flagged posts with GPT</strong>
                    <div className="text-muted">Let AI suggest better wording for potentially problematic content</div>
                  </div>
                  <Form.Check type="switch" defaultChecked />
                </div>

                <div className="d-flex justify-content-between align-items-center mb-4">
                  <div>
                    <strong>Summarize content before adding to report</strong>
                    <div className="text-muted">Use AI to create concise summaries of lengthy content</div>
                  </div>
                  <Form.Check type="switch" defaultChecked />
                </div>

                <div className="d-flex justify-content-between align-items-center mb-4">
                  <div>
                    <strong>Auto-flag content with sentiment score</strong>
                    <div className="text-muted">Automatically flag content with negative sentiment scores</div>
                  </div>
                  <Form.Check type="switch" />
                </div>

                <Form.Group className="mb-4">
                  <Form.Label><strong>Default GPT tone</strong></Form.Label>
                  <Form.Select defaultValue="Professional">
                    <option>Professional</option>
                    <option>Friendly</option>
                    <option>Casual</option>
                  </Form.Select>
                  <div className="text-muted mt-1">This tone will be used for AI-generated content and responses</div>
                </Form.Group>

                <Button variant="primary">Save Preferences</Button>
              </Form>
            </div>
          </div>

        </Tab>

        <Tab eventKey="notifications" title="Notification Settings">
          <Container>


            <Card className="p-3">

              <h5 className="mb-4">Notification Settings</h5>

              {/* Settings Options */}
              <Row className="gy-3">
                {[
                  {
                    title: "Weekly Digest Email",
                    desc: "Receive a summary of your reputation activity every week",
                    checked: true
                  },
                  {
                    title: "Real-Time Alerts (high risk)",
                    desc: "Get immediate notifications for critical reputation issues",
                    checked: true
                  },
                  {
                    title: "In-app Alerts & To-do Reminders",
                    desc: "Show notifications within the app interface",
                    checked: true
                  },
                  {
                    title: "Risk Score Drops > 10 pts",
                    desc: "Alert when your reputation score drops significantly",
                    checked: false
                  },
                  {
                    title: "Report Ready Alert",
                    desc: "Notify when your monthly reputation report is ready",
                    checked: true
                  },
                ].map((item, index) => (
                  <Col xs={12} key={index}>
                    <div className="d-flex justify-content-between align-items-center border-bottom pb-3">
                      <div>
                        <strong>{item.title}</strong>
                        <div className="text-muted small">{item.desc}</div>
                      </div>
                      <Form.Check
                        type="switch"
                        id={`switch-${index}`}
                        defaultChecked={item.checked}
                      />
                    </div>
                  </Col>
                ))}
              </Row>

              {/* Footer Buttons */}
              <div className="d-flex justify-content-between align-items-center mt-4">
                <div className="text-primary" style={{ cursor: 'pointer' }}>
                  📧 Manage Email Preferences
                </div>
                <Button variant="primary">Save Notification Settings</Button>
              </div>
            </Card>
          </Container>

        </Tab>

        <Tab eventKey="plan" title="Plan & Billing">
          <Container fluid className="p-4">
            {/* Tabs */}


            <Container className="my-4">
              {/* Plan & Billing Header */}
              <h5 className="text-start mb-3">Plan & Billing</h5>

              {/* Trial Status */}
              <Card className="mb-4" style={{ backgroundColor: "#f0f6ff" }}>
                <Card.Body className="d-flex justify-content-between align-items-center">
                  <div>
                    <strong>Trial Status</strong>
                    <p className="mb-0 text-primary">Day 5 of 14 Remaining</p>
                  </div>
                  <div className="text-end">
                    <small className="text-muted">Current Plan: Free</small><br />
                    <Button variant="outline-primary" size="sm" className="mt-1" style={{ backgroundColor: '#0d6efd', color: '#fff' }}>
                      Upgrade to Pro
                    </Button>
                  </div>
                </Card.Body>
              </Card>
              {/* Plans */}
              <Row className="gy-4 align-items">
                {/* Free Plan */}
                <Col md={6}>
                  <Card className="h-100">
                    <Card.Body className="text-start d-flex flex-column justify-content-between">
                      <div>
                        <h5>Free Plan</h5>
                        <ul className="mt-3 list-unstyled">
                          <li>✅ 3 Monthly Scans</li>
                          <li>✅ Risk Score + PDF Reports</li>
                          <li>✅ Limited GPT Use</li>
                          <li>✅ Manual Remediation Only</li>
                        </ul>
                        <h5 className="mt-3">$0 <small className="text-muted">/month</small></h5>
                        <div className="bg-light text-center p-2 mt-2 rounded text-muted">
                          Current Plan
                        </div>
                      </div>
                    </Card.Body>
                  </Card>

                  {/* Downgrade button outside card */}
                  <div className="text-start ">
                    <Button variant="link" className="text-danger p-0">
                      Downgrade to Free Plan
                    </Button>
                  </div>
                </Col>

                {/* Pro Plan */}
                <Col md={6}>
                  <Card className="h-100" style={{ backgroundColor: "#f0f6ff" }}>
                    <Card.Body className="text-start d-flex flex-column justify-content-between">
                      <div>
                        <div className="d-flex justify-content-between align-items-start">
                          <h5 className="mb-0">Pro Plan</h5>
                          <Badge bg="primary">RECOMMENDED</Badge>
                        </div>
                        <ul className="mt-3 list-unstyled">
                          <li>✅ Unlimited Scans</li>
                          <li>✅ GPT-4 Suggestions + Auto Fix</li>
                          <li>✅ API Priority</li>
                          <li>✅ Trend Graphs</li>
                          <li>✅ Shareable Risk Report</li>
                        </ul>
                        <h5 className="mt-3">$9 <small className="text-muted">/month</small></h5>
                      </div>
                      <Button variant="primary" className="w-100 mt-3">
                        Upgrade Plan
                      </Button>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>

              {/* Compare Button */}
              <div className="d-flex justify-content-end mt-3">
                <Button variant="outline-primary" size="sm">Compare All Plans</Button>
              </div>
            </Container>
            {/* Compare & Payment Info */}

            <Row className="align-items-center justify-content-between">
              {/* Left Side - Billing History */}
              <Col xs={12} md={6}>
                <h6 className="text-start fw-semibold text-muted mb-2">Billing History</h6>
                <a href="#view-invoices" className="text-primary text-decoration-none d-flex align-items-center">
                  <FaFileInvoice className="me-2" />
                  View Invoices
                </a>
              </Col>

              {/* Right Side - Update Payment Info */}
              <Col xs={12} md="auto" className="text-md-end mt-3 mt-md-0">
                <a href="#update-payment" className="text-primary text-decoration-none d-flex align-items-center justify-content-md-end">
                  <FaCreditCard className="me-2" />
                  Update Payment Info
                </a>
              </Col>
            </Row>


            {/* Billing History */}


            {/* Delete Account */}
            <Card className="mt-4 border-danger text-start">
              <Card.Body>
                <h5 className="text-danger">Delete Account</h5>
                <p className="text-danger">
                  ⚠️ Warning: This action is permanent and will erase all your data, reports, and settings.
                </p>
                <Button variant="danger">Delete My Account</Button>
              </Card.Body>
            </Card>
          </Container>

        </Tab>
      </Tabs>
    </Container>
  );
};

export default Settings;
