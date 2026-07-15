import React from 'react'
import heroImage from '../assets/hero.png'

export const Hero: React.FC = () => {
  return (
    <section className="hero">
      <img src={heroImage} alt="Hero" />
      <h1>Welcome to Kitffa</h1>
    </section>
  )
}