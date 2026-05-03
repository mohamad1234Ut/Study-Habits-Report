"use client";

import React, { useEffect, useState } from 'react';
import Typewriter from '@/components/Typewriter';
import GlitchText from '@/components/GlitchText';
import ResponsibilityScale from '@/components/ResponsibilityScale';
import { motion } from 'framer-motion';
import { Activity, Clock, FileText, UserCheck, Users, AlertCircle } from 'lucide-react';

const rawData = {
  totalStudents: 24,
  averageStudyHours: 1.91,
  homeworkSentiment: {
    notFairCount: 19,
    fairCount: 5,
    notFairPercentage: 79.17,
    fairPercentage: 20.83,
    label: "Feel the homework load is unfair"
  },
  competitions: {
    competitionCount: 14,
    studyHoursCount: 5,
    totalWeighting: 19,
    competitionPercentage: 73.68,
    studyHoursPercentage: 26.32
  },
  classEnjoyment: {
    boring: 4,
    neutral: 12,
    fun: 8
  },
  accountability: {
    ownFaultCount: 14,
    teacherFaultCount: 10,
    ownFaultPercentage: 58.33,
    teacherFaultPercentage: 41.67,
    label: "Take Ownership"
  },
  studyData: [
    { hours: "0h", count: 1 },
    { hours: "0.25h", count: 1 },
    { hours: "0.5h", count: 1 },
    { hours: "1h", count: 6 },
    { hours: "2h", count: 11, isMode: true },
    { hours: "3h", count: 1 },
    { hours: "4h", count: 2 },
    { hours: "6h", count: 1 }
  ]
};

export default function Dashboard() {
  const [uptime, setUptime] = useState(0);

  useEffect(() => {
    // Generate some fake telemetry hex codes
    const interval = setInterval(() => {
      setUptime(Date.now());
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen p-4 md:p-8" style={{ paddingBottom: '4rem' }}>
      {/* Background Telemetry Removed */}

      <header style={{ position: 'relative', zIndex: 1, marginBottom: '3rem', marginTop: '1rem', padding: 'clamp(1.5rem, 5vw, 3rem)', background: 'linear-gradient(135deg, rgba(74, 144, 226, 0.05) 0%, rgba(0,0,0,0) 100%)', border: '1px solid var(--border-medium)', borderRadius: '16px', boxShadow: '0 0 30px rgba(74, 144, 226, 0.1)', overflow: 'hidden' }}>
        {/* Decorative corner accents */}
        <div style={{ position: 'absolute', top: 0, left: 0, width: '30px', height: '30px', borderTop: '3px solid var(--primary-blue)', borderLeft: '3px solid var(--primary-blue)' }} />
        <div style={{ position: 'absolute', bottom: 0, right: 0, width: '30px', height: '30px', borderBottom: '3px solid var(--primary-blue)', borderRight: '3px solid var(--primary-blue)' }} />
        
        <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', flexWrap: 'wrap', justifyContent: 'center', textAlign: 'center' }}>
          <div style={{ background: 'rgba(74, 144, 226, 0.1)', padding: '1rem', borderRadius: '50%', boxShadow: '0 0 20px var(--blue-glow)' }}>
            <Activity size={48} color="var(--primary-blue)" />
          </div>
          <div>
            <h1 style={{ fontSize: 'clamp(2rem, 8vw, 4rem)', lineHeight: '1.1', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '2px', margin: 0, color: '#ffffff', textShadow: '0 0 20px var(--blue-glow)', paddingBottom: '5px' }}>
              <GlitchText text="Grade 9B Study Habits Report" />
            </h1>
            <h2 style={{ fontSize: 'clamp(1rem, 3vw, 1.5rem)', fontWeight: 300, textTransform: 'uppercase', letterSpacing: '4px', color: 'var(--primary-gold)', margin: 0, marginTop: '0.5rem', opacity: 0.9 }}>
              Grade 9B Survey Results
            </h2>
          </div>
        </div>
      </header>

      <main style={{ position: 'relative', zIndex: 1 }}>
        {/* Top KPI row */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem', marginBottom: '2rem' }}>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="glass-card" style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <Users size={40} color="var(--primary-blue)" />
            <div>
              <div style={{ fontSize: '0.9rem', opacity: 0.7, textTransform: 'uppercase' }}>Total Students</div>
              <div className="mono" style={{ fontSize: '2rem', fontWeight: 'bold', color: 'var(--primary-gold)' }}>{rawData.totalStudents}</div>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="glass-card" style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <Clock size={40} color="var(--primary-blue)" />
            <div>
              <div style={{ fontSize: '0.9rem', opacity: 0.7, textTransform: 'uppercase' }}>Avg Study Time</div>
              <div className="mono" style={{ fontSize: '2rem', fontWeight: 'bold', color: 'var(--primary-gold)' }}>{rawData.averageStudyHours}h</div>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="glass-card" style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <FileText size={40} color="var(--primary-blue)" />
            <div>
              <div style={{ fontSize: '0.9rem', opacity: 0.7, textTransform: 'uppercase' }}>Homework Fairness</div>
              <div className="mono" style={{ fontSize: '2rem', fontWeight: 'bold', color: 'var(--primary-gold)' }}>{rawData.homeworkSentiment.notFairPercentage}%</div>
              <div style={{ fontSize: '0.7rem', color: '#ff8888', fontWeight: 'bold' }}>Found it unfair</div>
            </div>
          </motion.div>
        </div>

        {/* Complex Components */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '2rem' }}>
          
          {/* Accountability Scale */}
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.6 }} className="glass-card" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <h2 style={{ alignSelf: 'flex-start', fontSize: '1.2rem', textTransform: 'uppercase', display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
              <UserCheck size={20} color="var(--primary-blue)" /> Accountability Scale
            </h2>
            <div style={{ alignSelf: 'flex-start', marginBottom: '2rem', fontSize: '0.85rem', opacity: 0.8, fontStyle: 'italic' }}>
              *Context: "Who is to blame when you get a bad grade?"
            </div>
            <ResponsibilityScale 
              leftWeight={rawData.accountability.ownFaultCount}
              rightWeight={rawData.accountability.teacherFaultCount}
              leftLabel={`Own Fault (${rawData.accountability.ownFaultPercentage}%)`}
              rightLabel={`Teacher Fault (${rawData.accountability.teacherFaultPercentage}%)`}
            />
          </motion.div>

          {/* Study Data Bar Chart (Simplified Volume via CSS) */}
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.8 }} className="glass-card" style={{ paddingBottom: '2rem' }}>
            <h2 style={{ fontSize: '1.2rem', textTransform: 'uppercase', display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
              <Activity size={20} color="var(--primary-blue)" /> Study Hour Distribution
            </h2>
            <div style={{ fontSize: '0.8rem', opacity: 0.7, marginBottom: '2rem', textAlign: 'center' }}>
              *Note: The mean study time is {rawData.averageStudyHours}h, while the mode is 2h.
            </div>
            <div style={{ display: 'flex', alignItems: 'flex-end', height: '200px', gap: '10px', justifyContent: 'center' }}>
              {rawData.studyData.map((data, i) => (
                <div key={i} title={`${((data.count / rawData.totalStudents) * 100).toFixed(1)}% of students`} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flex: 1, cursor: 'pointer' }}>
                  <motion.div 
                    initial={{ height: 0 }}
                    animate={{ height: `${data.count * 15}px` }}
                    transition={{ delay: 1 + (i * 0.1), type: 'spring' }}
                    style={{ 
                      width: '100%', 
                      maxWidth: '40px',
                      background: data.isMode ? 'linear-gradient(to top, var(--primary-gold), #FF8C00)' : 'linear-gradient(to top, var(--primary-blue), #00d2ff)',
                      boxShadow: data.isMode ? '0 0 15px var(--gold-glow)' : '0 0 15px var(--blue-glow)',
                      borderRadius: '4px 4px 0 0',
                      border: '1px solid rgba(255,255,255,0.2)'
                    }}
                  />
                  <div className="mono" style={{ marginTop: '0.5rem', fontSize: '0.8rem', color: data.isMode ? 'var(--primary-gold)' : '#fff' }}>{data.hours}</div>
                  <div className="mono" style={{ fontSize: '0.7rem', opacity: 0.5 }}>n={data.count}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Competitions vs Study Time */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.2 }} className="glass-card" style={{ marginTop: '2rem' }}>
           <h2 style={{ fontSize: '1.2rem', textTransform: 'uppercase', display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.5rem' }}>
              <AlertCircle size={20} color="var(--primary-blue)" /> Priority: Competitions vs Homework
            </h2>
            <div style={{ width: '100%', height: '30px', backgroundColor: 'rgba(255,255,255,0.05)', borderRadius: '15px', overflow: 'hidden', display: 'flex' }}>
              <motion.div 
                initial={{ width: 0 }} 
                animate={{ width: `${rawData.competitions.competitionPercentage}%` }} 
                transition={{ delay: 1.5, duration: 1 }}
                style={{ backgroundColor: 'var(--primary-gold)', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.8rem', fontWeight: 'bold', color: '#000' }}
              >
                Competitions ({rawData.competitions.competitionPercentage}%)
              </motion.div>
              <motion.div 
                initial={{ width: 0 }} 
                animate={{ width: `${rawData.competitions.studyHoursPercentage}%` }} 
                transition={{ delay: 1.5, duration: 1 }}
                style={{ backgroundColor: 'var(--primary-blue)', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.8rem', fontWeight: 'bold' }}
              >
                Study ({rawData.competitions.studyHoursPercentage}%)
              </motion.div>
            </div>
        </motion.div>

        {/* Team Section */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.8 }} className="glass-card" style={{ marginTop: '3rem', position: 'relative', overflow: 'hidden', padding: '3rem' }}>
           {/* Decorative background grid */}
           <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backgroundImage: 'linear-gradient(var(--border-light) 1px, transparent 1px), linear-gradient(90deg, var(--border-light) 1px, transparent 1px)', backgroundSize: '20px 20px', opacity: 0.1, zIndex: 0 }} />
           
           <div style={{ position: 'relative', zIndex: 1 }}>
             <h2 style={{ fontSize: '2rem', textTransform: 'uppercase', display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem', color: 'var(--primary-gold)', borderBottom: '1px solid var(--border-medium)', paddingBottom: '1rem' }}>
                <Users size={32} color="var(--primary-gold)" /> The Team Behind The Data
              </h2>
              
              <div style={{ display: 'grid', gap: '1.5rem', fontSize: '1.1rem', lineHeight: '1.8' }}>
                <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start', background: 'rgba(255, 255, 255, 0.03)', padding: '1.5rem', borderRadius: '8px', borderLeft: '4px solid var(--primary-blue)' }}>
                  <div className="mono" style={{ color: 'var(--primary-blue)', fontSize: '1.5rem', fontWeight: 'bold' }}>01</div>
                  <div>
                    <strong>Who we are:</strong> We are Grade 9B students with a passion for uncovering the truth behind student study habits.
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start', background: 'rgba(255, 255, 255, 0.03)', padding: '1.5rem', borderRadius: '8px', borderLeft: '4px solid var(--primary-gold)' }}>
                  <div className="mono" style={{ color: 'var(--primary-gold)', fontSize: '1.5rem', fontWeight: 'bold' }}>02</div>
                  <div>
                    <strong>What we did:</strong> We actively surveyed 24 students from our school, asking tough questions about homework fairness, accountability, and the real amount of time spent studying vs. competing.
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start', background: 'rgba(255, 255, 255, 0.03)', padding: '1.5rem', borderRadius: '8px', borderLeft: '4px solid #ff00c1' }}>
                  <div className="mono" style={{ color: '#ff00c1', fontSize: '1.5rem', fontWeight: 'bold' }}>03</div>
                  <div>
                    <strong>The Result:</strong> We crunched the math, processed the raw data into visual charts, and engineered this interactive telemetry website to showcase our findings to the world.
                  </div>
                </div>
              </div>
           </div>
        </motion.div>
      </main>

      <button 
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} 
        style={{ position: 'fixed', bottom: '20px', right: '20px', padding: '10px 15px', backgroundColor: 'var(--primary-blue)', color: 'white', border: '1px solid rgba(255,255,255,0.2)', borderRadius: '5px', cursor: 'pointer', zIndex: 100, boxShadow: '0 0 10px rgba(0,0,0,0.5)' }}
      >
        ↑ Back to Top
      </button>

      <button 
        onClick={() => window.print()} 
        style={{ position: 'fixed', bottom: '20px', left: '20px', padding: '10px 15px', backgroundColor: 'var(--primary-gold)', color: '#000', border: 'none', borderRadius: '5px', cursor: 'pointer', zIndex: 100, fontWeight: 'bold', boxShadow: '0 0 10px rgba(0,0,0,0.5)' }}
      >
        Download PDF Report
      </button>
    </div>
  );
}
