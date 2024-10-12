import React from 'react';

const MetricsCard = ({ label, value, trend, isPositive }) => (
  <div className="metric-card">
    <span className="metric-label">{label}</span>
    <h3 className="metric-value">{value}</h3>
    <span className={`metric-trend ${isPositive ? 'trend-up' : 'trend-down'}`}>
      {trend}
    </span>
  </div>
);

export default MetricsCard;
