'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Calculator, Info } from 'lucide-react'

type Unit = 'metric' | 'imperial'

interface BMICategory {
  label: string
  range: string
  color: string
  bgColor: string
  description: string
}

const bmiCategories: BMICategory[] = [
  {
    label: 'Underweight',
    range: '< 18.5',
    color: 'text-blue-600',
    bgColor: 'bg-blue-50 border-blue-200',
    description: 'May indicate nutritional deficiency or other health concerns. Consult a physician.',
  },
  {
    label: 'Normal Weight',
    range: '18.5 – 24.9',
    color: 'text-green-600',
    bgColor: 'bg-green-50 border-green-200',
    description: 'Associated with the lowest health risks. Maintain a balanced diet and regular exercise.',
  },
  {
    label: 'Overweight',
    range: '25 – 29.9',
    color: 'text-yellow-600',
    bgColor: 'bg-yellow-50 border-yellow-200',
    description: 'Slightly elevated health risk. Lifestyle modifications may be beneficial.',
  },
  {
    label: 'Obese',
    range: '≥ 30',
    color: 'text-red-600',
    bgColor: 'bg-red-50 border-red-200',
    description: 'Higher risk of cardiovascular disease, diabetes, and other conditions. Medical guidance recommended.',
  },
]

function getBMICategory(bmi: number): BMICategory {
  if (bmi < 18.5) return bmiCategories[0]
  if (bmi < 25) return bmiCategories[1]
  if (bmi < 30) return bmiCategories[2]
  return bmiCategories[3]
}

export default function BMICalculator() {
  const [unit, setUnit] = useState<Unit>('metric')
  const [heightCm, setHeightCm] = useState('')
  const [weightKg, setWeightKg] = useState('')
  const [heightFt, setHeightFt] = useState('')
  const [heightIn, setHeightIn] = useState('')
  const [weightLbs, setWeightLbs] = useState('')
  const [bmi, setBmi] = useState<number | null>(null)
  const [error, setError] = useState('')

  function calculate() {
    setError('')
    let bmiValue: number | null = null

    if (unit === 'metric') {
      const h = parseFloat(heightCm)
      const w = parseFloat(weightKg)
      if (!h || !w || h <= 0 || w <= 0) {
        setError('Please enter valid height and weight values.')
        setBmi(null)
        return
      }
      const hMeters = h / 100
      bmiValue = w / (hMeters * hMeters)
    } else {
      const ft = parseFloat(heightFt) || 0
      const inches = parseFloat(heightIn) || 0
      const lbs = parseFloat(weightLbs)
      const totalInches = ft * 12 + inches
      if (!totalInches || totalInches <= 0 || !lbs || lbs <= 0) {
        setError('Please enter valid height and weight values.')
        setBmi(null)
        return
      }
      bmiValue = (lbs / (totalInches * totalInches)) * 703
    }

    setBmi(parseFloat(bmiValue.toFixed(1)))
  }

  function reset() {
    setHeightCm('')
    setWeightKg('')
    setHeightFt('')
    setHeightIn('')
    setWeightLbs('')
    setBmi(null)
    setError('')
  }

  const category = bmi !== null ? getBMICategory(bmi) : null

  return (
    <section id="bmi-calculator" className="relative py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-2 bg-primary/10 rounded-full mb-4">
            <span className="text-primary text-sm font-semibold uppercase tracking-wider">Health Education</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold font-display mb-4">BMI Calculator</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Body Mass Index (BMI) is a simple screening tool used to assess whether your weight is healthy
            relative to your height. Learn how it is calculated and what your result means.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Calculator Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="p-8 border-violet-100 h-full">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                  <Calculator className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold">Calculate Your BMI</h3>
              </div>

              {/* Unit Toggle */}
              <div className="flex rounded-xl overflow-hidden border border-violet-200 mb-6 w-fit">
                <button
                  onClick={() => { setUnit('metric'); reset() }}
                  className={`px-6 py-2 text-sm font-semibold transition-colors ${unit === 'metric' ? 'bg-primary text-primary-foreground' : 'text-muted-foreground hover:bg-accent'}`}
                >
                  Metric (cm / kg)
                </button>
                <button
                  onClick={() => { setUnit('imperial'); reset() }}
                  className={`px-6 py-2 text-sm font-semibold transition-colors ${unit === 'imperial' ? 'bg-primary text-primary-foreground' : 'text-muted-foreground hover:bg-accent'}`}
                >
                  Imperial (ft / lbs)
                </button>
              </div>

              {/* Inputs */}
              {unit === 'metric' ? (
                <div className="space-y-4 mb-6">
                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">Height (cm)</label>
                    <input
                      type="number"
                      min="50"
                      max="300"
                      placeholder="e.g. 165"
                      value={heightCm}
                      onChange={(e) => setHeightCm(e.target.value)}
                      className="w-full px-4 py-3 border border-border rounded-xl text-foreground bg-white focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">Weight (kg)</label>
                    <input
                      type="number"
                      min="1"
                      max="500"
                      placeholder="e.g. 60"
                      value={weightKg}
                      onChange={(e) => setWeightKg(e.target.value)}
                      className="w-full px-4 py-3 border border-border rounded-xl text-foreground bg-white focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition"
                    />
                  </div>
                </div>
              ) : (
                <div className="space-y-4 mb-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-foreground mb-2">Height (ft)</label>
                      <input
                        type="number"
                        min="1"
                        max="9"
                        placeholder="e.g. 5"
                        value={heightFt}
                        onChange={(e) => setHeightFt(e.target.value)}
                        className="w-full px-4 py-3 border border-border rounded-xl text-foreground bg-white focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-foreground mb-2">Height (in)</label>
                      <input
                        type="number"
                        min="0"
                        max="11"
                        placeholder="e.g. 7"
                        value={heightIn}
                        onChange={(e) => setHeightIn(e.target.value)}
                        className="w-full px-4 py-3 border border-border rounded-xl text-foreground bg-white focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">Weight (lbs)</label>
                    <input
                      type="number"
                      min="1"
                      max="1000"
                      placeholder="e.g. 132"
                      value={weightLbs}
                      onChange={(e) => setWeightLbs(e.target.value)}
                      className="w-full px-4 py-3 border border-border rounded-xl text-foreground bg-white focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition"
                    />
                  </div>
                </div>
              )}

              {error && (
                <p className="text-red-500 text-sm mb-4">{error}</p>
              )}

              <div className="flex gap-3">
                <Button
                  onClick={calculate}
                  size="lg"
                  className="flex-1 rounded-full bg-primary hover:bg-primary/90"
                >
                  Calculate BMI
                </Button>
                <Button
                  onClick={reset}
                  size="lg"
                  variant="outline"
                  className="rounded-full"
                >
                  Reset
                </Button>
              </div>

              {/* Result */}
              {bmi !== null && category && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4 }}
                  className={`mt-6 p-6 rounded-2xl border ${category.bgColor}`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm font-semibold text-muted-foreground">Your BMI</span>
                    <span className={`text-4xl font-bold ${category.color}`}>{bmi}</span>
                  </div>
                  <div className={`text-xl font-bold mb-2 ${category.color}`}>{category.label}</div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{category.description}</p>
                </motion.div>
              )}
            </Card>
          </motion.div>

          {/* Education Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Formula Explanation */}
            <Card className="p-8 border-violet-100">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 bg-purple-100 rounded-xl flex items-center justify-center">
                  <Info className="w-5 h-5 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold">How BMI Is Calculated</h3>
              </div>
              <div className="space-y-4 text-sm text-muted-foreground leading-relaxed">
                <div className="bg-violet-50 border border-violet-100 rounded-xl p-5">
                  <p className="text-xs font-semibold text-primary uppercase tracking-wider mb-2">Metric Formula</p>
                  <p className="font-mono text-base text-foreground font-semibold">
                    BMI = Weight (kg) ÷ Height² (m)
                  </p>
                  <p className="text-xs mt-2 text-muted-foreground">Example: 60 kg ÷ (1.65 m)² = <strong>22.0</strong></p>
                </div>
                <div className="bg-violet-50 border border-violet-100 rounded-xl p-5">
                  <p className="text-xs font-semibold text-primary uppercase tracking-wider mb-2">Imperial Formula</p>
                  <p className="font-mono text-base text-foreground font-semibold">
                    BMI = (Weight (lbs) ÷ Height² (in)) × 703
                  </p>
                  <p className="text-xs mt-2 text-muted-foreground">Example: (132 lbs ÷ (65 in)²) × 703 = <strong>21.9</strong></p>
                </div>
                <p>
                  BMI is calculated by dividing a person&apos;s weight by the square of their height.
                  It provides a simple numeric measure of body fat based on height and weight data.
                </p>
              </div>
            </Card>

            {/* Category Reference */}
            <Card className="p-8 border-violet-100">
              <h3 className="text-xl font-bold mb-5">BMI Categories</h3>
              <div className="space-y-3">
                {bmiCategories.map((cat) => (
                  <div
                    key={cat.label}
                    className={`flex items-center justify-between px-5 py-3 rounded-xl border ${cat.bgColor} ${bmi !== null && getBMICategory(bmi).label === cat.label ? 'ring-2 ring-offset-1 ring-primary/40' : ''}`}
                  >
                    <span className={`font-semibold text-sm ${cat.color}`}>{cat.label}</span>
                    <span className={`text-sm font-mono font-bold ${cat.color}`}>{cat.range}</span>
                  </div>
                ))}
              </div>
              <p className="text-xs text-muted-foreground mt-4 leading-relaxed">
                * BMI is a screening tool, not a diagnostic tool. For a comprehensive health assessment, please consult with a qualified physician.
              </p>
            </Card>
          </motion.div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-40 -right-20 w-64 h-64 bg-purple-100/30 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-40 -left-20 w-80 h-80 bg-violet-100/20 rounded-full blur-3xl -z-10" />
    </section>
  )
}
