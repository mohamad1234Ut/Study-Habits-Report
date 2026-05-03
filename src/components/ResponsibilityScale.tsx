"use client";

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface ResponsibilityScaleProps {
  leftWeight: number; // e.g., ownFaultCount (14)
  rightWeight: number; // e.g., teacherFaultCount (10)
  leftLabel: string;
  rightLabel: string;
}

export default function ResponsibilityScale({ leftWeight, rightWeight, leftLabel, rightLabel }: ResponsibilityScaleProps) {
  const [tilt, setTilt] = useState(0);

  useEffect(() => {
    // Calculate tilt angle based on difference
    const diff = leftWeight - rightWeight;
    const maxDiff = Math.max(leftWeight, rightWeight) + 5; 
    const maxAngle = 15; // max tilt degrees
    const angle = (diff / maxDiff) * maxAngle;
    
    // Add a slight delay for dramatic effect
    setTimeout(() => {
      setTilt(-angle); // Negative because left side heavier means tilting counter-clockwise if pivot is center
    }, 500);
  }, [leftWeight, rightWeight]);

  return (
    <div style={{ position: 'relative', width: '100%', height: '300px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      {/* HUD Border replaced with CSS corners */}
      <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none', opacity: 0.5 }}>
        {/* Top Left */}
        <div style={{ position: 'absolute', top: '20px', left: '20px', width: '30px', height: '30px', borderTop: '2px solid var(--primary-blue)', borderLeft: '2px solid var(--primary-blue)' }} />
        {/* Top Right */}
        <div style={{ position: 'absolute', top: '20px', right: '20px', width: '30px', height: '30px', borderTop: '2px solid var(--primary-blue)', borderRight: '2px solid var(--primary-blue)' }} />
        {/* Bottom Left */}
        <div style={{ position: 'absolute', bottom: '20px', left: '20px', width: '30px', height: '30px', borderBottom: '2px solid var(--primary-blue)', borderLeft: '2px solid var(--primary-blue)' }} />
        {/* Bottom Right */}
        <div style={{ position: 'absolute', bottom: '20px', right: '20px', width: '30px', height: '30px', borderBottom: '2px solid var(--primary-blue)', borderRight: '2px solid var(--primary-blue)' }} />
      </div>

      <div style={{ position: 'relative', width: '300px', height: '150px' }}>
        {/* The Pivot Base */}
        <div style={{ 
          position: 'absolute', 
          bottom: 0, 
          left: '50%', 
          transform: 'translateX(-50%)',
          width: 0, 
          height: 0, 
          borderLeft: '20px solid transparent',
          borderRight: '20px solid transparent',
          borderBottom: '40px solid var(--primary-blue)',
          opacity: 0.8
        }}></div>

        {/* The Animated Bar */}
        <motion.div 
          initial={{ rotate: 0 }}
          animate={{ rotate: tilt }}
          transition={{ type: "spring", stiffness: 50, damping: 10, mass: 2 }}
          style={{
            position: 'absolute',
            bottom: '40px',
            left: 0,
            width: '100%',
            height: '6px',
            backgroundColor: 'var(--primary-gold)',
            boxShadow: '0 0 10px var(--gold-glow)',
            transformOrigin: '50% 50%',
            borderRadius: '3px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            padding: '0 20px'
          }}
        >
          {/* Left Weights */}
          <div style={{ display: 'flex', flexWrap: 'wrap-reverse', width: '60px', gap: '2px', transform: 'translateY(-10px)' }}>
            {Array.from({ length: leftWeight }).map((_, i) => (
              <motion.div 
                key={`left-${i}`}
                className="student-block"
                initial={{ y: -300, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5 + (i * 0.05), type: "spring", stiffness: 100 }}
              />
            ))}
          </div>
          
          {/* Right Weights */}
          <div style={{ display: 'flex', flexWrap: 'wrap-reverse', width: '60px', gap: '2px', transform: 'translateY(-10px)', justifyContent: 'flex-end' }}>
             {Array.from({ length: rightWeight }).map((_, i) => (
              <motion.div 
                key={`right-${i}`}
                className="student-block"
                initial={{ y: -300, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5 + (i * 0.05), type: "spring", stiffness: 100 }}
              />
            ))}
          </div>
        </motion.div>
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between', width: '350px', marginTop: '20px' }}>
        <div style={{ textAlign: 'center' }}>
          <div className="mono" style={{ color: 'var(--primary-gold)', fontSize: '1.2rem' }}>{leftWeight}</div>
          <div style={{ fontSize: '0.8rem', opacity: 0.7 }}>{leftLabel}</div>
        </div>
        <div style={{ textAlign: 'center' }}>
          <div className="mono" style={{ color: 'var(--primary-gold)', fontSize: '1.2rem' }}>{rightWeight}</div>
          <div style={{ fontSize: '0.8rem', opacity: 0.7 }}>{rightLabel}</div>
        </div>
      </div>
    </div>
  );
}
