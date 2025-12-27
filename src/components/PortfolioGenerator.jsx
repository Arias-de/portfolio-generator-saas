import React, { useState } from 'react';
import { User, Briefcase, Award, Mail, Phone, Linkedin, Globe, Download, Eye, Edit3, Sparkles, Palette, GraduationCap, FileCheck, Star } from 'lucide-react';

export default function PortfolioGeneratorSaaS() {
  const [step, setStep] = useState('edit');
  const [theme, setTheme] = useState('modern');
  
  const [portfolioData, setPortfolioData] = useState({
    // Info personnelle
    name: 'Marie Kouassi',
    title: 'Consultante en Marketing Digital',
    bio: 'Professionnelle passionnée avec 5+ ans d\'expérience dans l\'accompagnement des entreprises vers le succès.',
    photo: '',
    email: 'marie.kouassi@email.com',
    phone: '+229 97 12 34 56',
    location: 'Cotonou, Bénin',
    linkedin: 'linkedin.com/in/mariekouassi',
    website: 'mariekouassi.com',
    
    // Compétences
    skills: [
      { name: 'Communication', level: 90 },
      { name: 'Gestion de projet', level: 85 },
      { name: 'Analyse stratégique', level: 80 },
      { name: 'Leadership', level: 75 }
    ],
    
    // Expériences
    experiences: [
      {
        title: 'Consultante Senior',
        company: 'Digital Africa',
        period: '2021 - Présent',
        description: 'Accompagnement stratégique des PME dans leur transformation digitale'
      },
      {
        title: 'Chargée de Marketing',
        company: 'Innovation Hub',
        period: '2019 - 2021',
        description: 'Développement et mise en œuvre de stratégies marketing innovantes'
      }
    ],
    
    // Projets/Réalisations
    projects: [
      {
        name: 'Campagne Digitale Nationale',
        description: 'Augmentation de 150% de la visibilité client',
        details: 'Stratégie multi-canal, réseaux sociaux, SEO'
      },
      {
        name: 'Formation Entrepreneuriat',
        description: 'Formation de 200+ entrepreneurs',
        details: 'Marketing digital, branding, communication'
      }
    ],
    
    // Formation/Diplômes
    education: [
      {
        degree: 'Master en Marketing et Communication',
        school: 'Université d\'Abomey-Calavi',
        year: '2019',
        location: 'Bénin',
        description: 'Spécialisation en marketing digital et stratégie de communication'
      },
      {
        degree: 'Licence en Sciences de Gestion',
        school: 'Université de Parakou',
        year: '2017',
        location: 'Bénin',
        description: 'Mention Bien - Spécialité Marketing'
      }
    ],
    
    // Certifications
    certifications: [
      {
        name: 'Google Digital Marketing Certification',
        organization: 'Google',
        year: '2023',
        credentialId: 'GGL-2023-456789'
      },
      {
        name: 'Certification en Gestion de Projet',
        organization: 'PMI',
        year: '2022',
        credentialId: 'PMI-2022-123456'
      },
      {
        name: 'Facebook Blueprint Certification',
        organization: 'Meta',
        year: '2021',
        credentialId: 'FB-2021-987654'
      }
    ],
    
    // Langues
    languages: [
      { name: 'Français', level: 'Natif' },
      { name: 'Anglais', level: 'Courant' },
      { name: 'Fon', level: 'Natif' }
    ]
  });

  const updateField = (field, value) => {
    setPortfolioData(prev => ({ ...prev, [field]: value }));
  };

  const handlePhotoUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        updateField('photo', reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const updateArrayField = (field, index, key, value) => {
    setPortfolioData(prev => ({
      ...prev,
      [field]: prev[field].map((item, i) => 
        i === index ? { ...item, [key]: value } : item
      )
    }));
  };

  const addArrayItem = (field, template) => {
    setPortfolioData(prev => ({
      ...prev,
      [field]: [...prev[field], template]
    }));
  };

  const removeArrayItem = (field, index) => {
    setPortfolioData(prev => ({
      ...prev,
      [field]: prev[field].filter((_, i) => i !== index)
    }));
  };

  const downloadPortfolio = () => {
    const currentThemeColors = themes[theme];
    
    // Générer le HTML complet du portfolio
    const portfolioHTML = `
      <div class="${currentThemeColors.bg} min-h-screen p-12">
        <div class="${currentThemeColors.card} rounded-2xl shadow-2xl p-12 max-w-5xl mx-auto">
          <div class="text-center mb-12">
            ${portfolioData.photo ? `
              <div class="flex justify-center mb-8">
                <img 
                  src="${portfolioData.photo}" 
                  alt="${portfolioData.name}"
                  class="w-40 h-40 rounded-full object-cover border-4 border-white shadow-2xl"
                />
              </div>
            ` : ''}
            <h1 class="text-5xl font-bold text-gray-900 mb-3">${portfolioData.name}</h1>
            <p class="text-2xl ${currentThemeColors.text} font-medium mb-6">${portfolioData.title}</p>
            <p class="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">${portfolioData.bio}</p>
            
            <div class="flex justify-center gap-6 flex-wrap">
              ${portfolioData.email ? `
                <a href="mailto:${portfolioData.email}" class="flex items-center gap-2 text-gray-600 hover:text-gray-900">
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                  </svg>
                  <span>${portfolioData.email}</span>
                </a>
              ` : ''}
              ${portfolioData.phone ? `
                <a href="tel:${portfolioData.phone}" class="flex items-center gap-2 text-gray-600 hover:text-gray-900">
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                  </svg>
                  <span>${portfolioData.phone}</span>
                </a>
              ` : ''}
              ${portfolioData.linkedin ? `
                <a href="https://${portfolioData.linkedin}" class="flex items-center gap-2 text-gray-600 hover:text-gray-900" target="_blank">
                  <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                  <span>LinkedIn</span>
                </a>
              ` : ''}
            </div>
          </div>

          ${portfolioData.education.length > 0 ? `
            <div class="mb-12">
              <h2 class="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M12 14l9-5-9-5-9 5 9 5z"/>
                  <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"/>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"/>
                </svg>
                Formation & Diplômes
              </h2>
              <div class="space-y-6">
                ${portfolioData.education.map(edu => `
                  <div class="border-l-4 ${currentThemeColors.border} pl-6 py-2">
                    <h3 class="font-bold text-xl text-gray-900">${edu.degree}</h3>
                    <p class="${currentThemeColors.text} font-semibold text-lg">${edu.school}</p>
                    <p class="text-gray-500 mb-2">${edu.year} • ${edu.location}</p>
                    ${edu.description ? `<p class="text-gray-700">${edu.description}</p>` : ''}
                  </div>
                `).join('')}
              </div>
            </div>
          ` : ''}

          ${portfolioData.certifications.length > 0 ? `
            <div class="mb-12">
              <h2 class="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
                Certifications & Attestations
              </h2>
              <div class="grid md:grid-cols-2 gap-4">
                ${portfolioData.certifications.map(cert => `
                  <div class="flex items-start gap-3 p-4 bg-gray-50 rounded-xl">
                    <svg class="w-6 h-6 ${currentThemeColors.text} mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                    <div>
                      <h3 class="font-bold text-lg text-gray-900">${cert.name}</h3>
                      <p class="text-gray-600">${cert.organization}</p>
                      <p class="text-sm text-gray-500">${cert.year}</p>
                      ${cert.credentialId ? `<p class="text-xs text-gray-500 mt-1">ID: ${cert.credentialId}</p>` : ''}
                    </div>
                  </div>
                `).join('')}
              </div>
            </div>
          ` : ''}

          ${portfolioData.skills.length > 0 ? `
            <div class="mb-12">
              <h2 class="text-3xl font-bold text-gray-900 mb-6">Compétences Professionnelles</h2>
              <div class="grid md:grid-cols-2 gap-4">
                ${portfolioData.skills.map(skill => `
                  <div>
                    <div class="flex justify-between mb-2">
                      <span class="font-semibold text-gray-700">${skill.name}</span>
                      <span class="text-gray-500">${skill.level}%</span>
                    </div>
                    <div class="w-full bg-gray-200 rounded-full h-3">
                      <div class="${currentThemeColors.accent} h-3 rounded-full" style="width: ${skill.level}%"></div>
                    </div>
                  </div>
                `).join('')}
              </div>
            </div>
          ` : ''}

          ${portfolioData.experiences.length > 0 ? `
            <div class="mb-12">
              <h2 class="text-3xl font-bold text-gray-900 mb-6">Expérience Professionnelle</h2>
              <div class="space-y-6">
                ${portfolioData.experiences.map(exp => `
                  <div class="border-l-4 ${currentThemeColors.border} pl-6">
                    <h3 class="font-bold text-xl text-gray-900">${exp.title}</h3>
                    <p class="${currentThemeColors.text} font-semibold text-lg">${exp.company}</p>
                    <p class="text-gray-500 mb-3">${exp.period}</p>
                    <p class="text-gray-700">${exp.description}</p>
                  </div>
                `).join('')}
              </div>
            </div>
          ` : ''}

          ${portfolioData.languages.length > 0 ? `
            <div>
              <h2 class="text-3xl font-bold text-gray-900 mb-6">Langues</h2>
              <div class="flex flex-wrap gap-3">
                ${portfolioData.languages.map(lang => `
                  <span class="${currentThemeColors.accent} text-white text-lg rounded-full font-medium px-4 py-2">
                    ${lang.name} - ${lang.level}
                  </span>
                `).join('')}
              </div>
            </div>
          ` : ''}
        </div>
      </div>
    `;

    // Créer le fichier HTML complet
    const fullHtml = `<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${portfolioData.name} - Portfolio Professionnel</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <style>
        @media print {
            body { print-color-adjust: exact; -webkit-print-color-adjust: exact; }
        }
    </style>
</head>
<body class="m-0 p-0">
    ${portfolioHTML}
</body>
</html>`;
    
    // Télécharger le fichier
    const blob = new Blob([fullHtml], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${portfolioData.name.replace(/\s+/g, '-').toLowerCase()}-portfolio.html`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    
    // Message de confirmation
    alert('✅ Portfolio téléchargé avec succès ! Ouvrez le fichier HTML dans votre navigateur pour le voir.');
  };

  const themes = {
    modern: {
      bg: 'bg-gradient-to-br from-blue-50 to-indigo-100',
      card: 'bg-white',
      accent: 'bg-blue-600',
      text: 'text-blue-600',
      border: 'border-blue-200'
    },
    minimalist: {
      bg: 'bg-gray-50',
      card: 'bg-white',
      accent: 'bg-gray-900',
      text: 'text-gray-900',
      border: 'border-gray-200'
    },
    creative: {
      bg: 'bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50',
      card: 'bg-white',
      accent: 'bg-gradient-to-r from-purple-600 to-pink-600',
      text: 'text-purple-600',
      border: 'border-purple-200'
    }
  };

  const currentTheme = themes[theme];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-50 to-pink-100">
      {/* Header */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 py-3 sm:py-4">
          <div className="flex items-center justify-between mb-3 sm:mb-0">
            <div className="flex items-center gap-2">
              <Sparkles className="w-6 h-6 sm:w-8 sm:h-8 text-purple-600" />
              <h1 className="text-lg sm:text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                PortfolioGen Pro
              </h1>
            </div>
          </div>
          
          <div className="flex gap-2 sm:gap-3 flex-wrap sm:flex-nowrap">
            <button
              onClick={() => setStep('edit')}
              className={`flex items-center gap-1 sm:gap-2 px-3 sm:px-4 py-2 rounded-lg text-sm sm:text-base font-medium transition ${
                step === 'edit' 
                  ? 'bg-purple-600 text-white' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              <Edit3 className="w-3 h-3 sm:w-4 sm:h-4" />
              <span className="hidden sm:inline">Éditer</span>
              <span className="sm:hidden">Édit</span>
            </button>
            
            <button
              onClick={() => setStep('preview')}
              className={`flex items-center gap-1 sm:gap-2 px-3 sm:px-4 py-2 rounded-lg text-sm sm:text-base font-medium transition ${
                step === 'preview' 
                  ? 'bg-purple-600 text-white' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              <Eye className="w-3 h-3 sm:w-4 sm:h-4" />
              <span className="hidden sm:inline">Prévisualiser</span>
              <span className="sm:hidden">Voir</span>
            </button>
            
            <button
              onClick={downloadPortfolio}
              className="flex items-center gap-1 sm:gap-2 px-3 sm:px-4 py-2 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-lg text-sm sm:text-base font-medium hover:from-green-600 hover:to-emerald-600 transition"
            >
              <Download className="w-3 h-3 sm:w-4 sm:h-4" />
              <span className="hidden sm:inline">Télécharger</span>
              <span className="sm:hidden">↓</span>
            </button>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-3 sm:px-4 py-4 sm:py-8">
        {step === 'edit' ? (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
            {/* Éditeur - Colonne gauche avec scroll */}
            <div className="space-y-4 sm:space-y-6 max-h-[60vh] lg:max-h-[calc(100vh-200px)] overflow-y-auto pr-2 sm:pr-4">
              
              {/* Sélecteur de thème mobile - visible uniquement sur mobile */}
              <div className="lg:hidden bg-white rounded-xl shadow-lg p-4">
                <div className="flex items-center gap-2">
                  <Palette className="w-4 h-4 text-gray-500" />
                  <label className="text-sm font-medium text-gray-700">Thème :</label>
                  <select
                    value={theme}
                    onChange={(e) => setTheme(e.target.value)}
                    className="flex-1 px-3 py-2 border border-gray-200 rounded-lg text-sm"
                  >
                    <option value="modern">Moderne</option>
                    <option value="minimalist">Minimaliste</option>
                    <option value="creative">Créatif</option>
                  </select>
                </div>
              </div>

              {/* Section Info Personnelle */}
              <div className="bg-white rounded-xl shadow-lg p-6">
                <div className="flex items-center gap-2 mb-4">
                  <User className="w-5 h-5 text-purple-600" />
                  <h2 className="text-xl font-bold text-gray-800">Informations Personnelles</h2>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    {portfolioData.photo && (
                      <img 
                        src={portfolioData.photo} 
                        alt="Photo de profil" 
                        className="w-24 h-24 rounded-full object-cover border-4 border-purple-200"
                      />
                    )}
                    <div className="flex-1">
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Photo de profil
                      </label>
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handlePhotoUpload}
                        className="w-full px-4 py-2 border border-gray-200 rounded-lg text-sm file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:bg-purple-50 file:text-purple-600 file:font-medium hover:file:bg-purple-100"
                      />
                    </div>
                  </div>
                  
                  <input
                    type="text"
                    value={portfolioData.name}
                    onChange={(e) => updateField('name', e.target.value)}
                    placeholder="Nom complet"
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  />
                  
                  <input
                    type="text"
                    value={portfolioData.title}
                    onChange={(e) => updateField('title', e.target.value)}
                    placeholder="Titre professionnel"
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  />
                  
                  <textarea
                    value={portfolioData.bio}
                    onChange={(e) => updateField('bio', e.target.value)}
                    placeholder="Résumé professionnel"
                    rows="3"
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  />
                  
                  <div className="grid grid-cols-2 gap-3">
                    <input
                      type="email"
                      value={portfolioData.email}
                      onChange={(e) => updateField('email', e.target.value)}
                      placeholder="Email"
                      className="px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    />
                    
                    <input
                      type="tel"
                      value={portfolioData.phone}
                      onChange={(e) => updateField('phone', e.target.value)}
                      placeholder="Téléphone"
                      className="px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    />
                  </div>
                  
                  <input
                    type="text"
                    value={portfolioData.location}
                    onChange={(e) => updateField('location', e.target.value)}
                    placeholder="Localisation"
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  />
                </div>
              </div>

              {/* Section Formation/Diplômes */}
              <div className="bg-white rounded-xl shadow-lg p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <GraduationCap className="w-5 h-5 text-purple-600" />
                    <h2 className="text-xl font-bold text-gray-800">Formation & Diplômes</h2>
                  </div>
                  <button
                    onClick={() => addArrayItem('education', { degree: '', school: '', year: '', location: '', description: '' })}
                    className="px-3 py-1 bg-purple-100 text-purple-600 rounded-lg text-sm font-medium hover:bg-purple-200"
                  >
                    + Ajouter
                  </button>
                </div>
                
                <div className="space-y-4">
                  {portfolioData.education.map((edu, index) => (
                    <div key={index} className="p-4 border border-gray-200 rounded-lg space-y-3">
                      <div className="flex justify-between">
                        <input
                          type="text"
                          value={edu.degree}
                          onChange={(e) => updateArrayField('education', index, 'degree', e.target.value)}
                          placeholder="Diplôme (ex: Master, Licence, BAC...)"
                          className="flex-1 px-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                        />
                        <button
                          onClick={() => removeArrayItem('education', index)}
                          className="ml-2 px-2 py-2 text-red-500 hover:bg-red-50 rounded-lg"
                        >
                          ×
                        </button>
                      </div>
                      <input
                        type="text"
                        value={edu.school}
                        onChange={(e) => updateArrayField('education', index, 'school', e.target.value)}
                        placeholder="École/Université"
                        className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      />
                      <div className="grid grid-cols-2 gap-3">
                        <input
                          type="text"
                          value={edu.year}
                          onChange={(e) => updateArrayField('education', index, 'year', e.target.value)}
                          placeholder="Année (ex: 2023)"
                          className="px-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                        />
                        <input
                          type="text"
                          value={edu.location}
                          onChange={(e) => updateArrayField('education', index, 'location', e.target.value)}
                          placeholder="Lieu"
                          className="px-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                        />
                      </div>
                      <textarea
                        value={edu.description}
                        onChange={(e) => updateArrayField('education', index, 'description', e.target.value)}
                        placeholder="Description (mentions, spécialisation...)"
                        rows="2"
                        className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Section Certifications */}
              <div className="bg-white rounded-xl shadow-lg p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <FileCheck className="w-5 h-5 text-purple-600" />
                    <h2 className="text-xl font-bold text-gray-800">Certifications & Attestations</h2>
                  </div>
                  <button
                    onClick={() => addArrayItem('certifications', { name: '', organization: '', year: '', credentialId: '' })}
                    className="px-3 py-1 bg-purple-100 text-purple-600 rounded-lg text-sm font-medium hover:bg-purple-200"
                  >
                    + Ajouter
                  </button>
                </div>
                
                <div className="space-y-4">
                  {portfolioData.certifications.map((cert, index) => (
                    <div key={index} className="p-4 border border-gray-200 rounded-lg space-y-3">
                      <div className="flex justify-between">
                        <input
                          type="text"
                          value={cert.name}
                          onChange={(e) => updateArrayField('certifications', index, 'name', e.target.value)}
                          placeholder="Nom de la certification"
                          className="flex-1 px-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                        />
                        <button
                          onClick={() => removeArrayItem('certifications', index)}
                          className="ml-2 px-2 py-2 text-red-500 hover:bg-red-50 rounded-lg"
                        >
                          ×
                        </button>
                      </div>
                      <input
                        type="text"
                        value={cert.organization}
                        onChange={(e) => updateArrayField('certifications', index, 'organization', e.target.value)}
                        placeholder="Organisation émettrice"
                        className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      />
                      <div className="grid grid-cols-2 gap-3">
                        <input
                          type="text"
                          value={cert.year}
                          onChange={(e) => updateArrayField('certifications', index, 'year', e.target.value)}
                          placeholder="Année"
                          className="px-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                        />
                        <input
                          type="text"
                          value={cert.credentialId}
                          onChange={(e) => updateArrayField('certifications', index, 'credentialId', e.target.value)}
                          placeholder="N° de certification (optionnel)"
                          className="px-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Section Compétences */}
              <div className="bg-white rounded-xl shadow-lg p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <Award className="w-5 h-5 text-purple-600" />
                    <h2 className="text-xl font-bold text-gray-800">Compétences</h2>
                  </div>
                  <button
                    onClick={() => addArrayItem('skills', { name: '', level: 50 })}
                    className="px-3 py-1 bg-purple-100 text-purple-600 rounded-lg text-sm font-medium hover:bg-purple-200"
                  >
                    + Ajouter
                  </button>
                </div>
                
                <div className="space-y-3">
                  {portfolioData.skills.map((skill, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <input
                        type="text"
                        value={skill.name}
                        onChange={(e) => updateArrayField('skills', index, 'name', e.target.value)}
                        placeholder="Compétence"
                        className="flex-1 px-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      />
                      <input
                        type="number"
                        value={skill.level}
                        onChange={(e) => updateArrayField('skills', index, 'level', e.target.value)}
                        min="0"
                        max="100"
                        className="w-20 px-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      />
                      <button
                        onClick={() => removeArrayItem('skills', index)}
                        className="px-2 py-2 text-red-500 hover:bg-red-50 rounded-lg"
                      >
                        ×
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              {/* Section Expériences */}
              <div className="bg-white rounded-xl shadow-lg p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <Briefcase className="w-5 h-5 text-purple-600" />
                    <h2 className="text-xl font-bold text-gray-800">Expériences Professionnelles</h2>
                  </div>
                  <button
                    onClick={() => addArrayItem('experiences', { title: '', company: '', period: '', description: '' })}
                    className="px-3 py-1 bg-purple-100 text-purple-600 rounded-lg text-sm font-medium hover:bg-purple-200"
                  >
                    + Ajouter
                  </button>
                </div>
                
                <div className="space-y-4">
                  {portfolioData.experiences.map((exp, index) => (
                    <div key={index} className="p-4 border border-gray-200 rounded-lg space-y-3">
                      <div className="flex justify-between">
                        <input
                          type="text"
                          value={exp.title}
                          onChange={(e) => updateArrayField('experiences', index, 'title', e.target.value)}
                          placeholder="Titre du poste"
                          className="flex-1 px-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                        />
                        <button
                          onClick={() => removeArrayItem('experiences', index)}
                          className="ml-2 px-2 py-2 text-red-500 hover:bg-red-50 rounded-lg"
                        >
                          ×
                        </button>
                      </div>
                      <input
                        type="text"
                        value={exp.company}
                        onChange={(e) => updateArrayField('experiences', index, 'company', e.target.value)}
                        placeholder="Entreprise/Organisation"
                        className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      />
                      <input
                        type="text"
                        value={exp.period}
                        onChange={(e) => updateArrayField('experiences', index, 'period', e.target.value)}
                        placeholder="Période (ex: 2021-2023)"
                        className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      />
                      <textarea
                        value={exp.description}
                        onChange={(e) => updateArrayField('experiences', index, 'description', e.target.value)}
                        placeholder="Description des responsabilités"
                        rows="2"
                        className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Section Langues */}
              <div className="bg-white rounded-xl shadow-lg p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <Globe className="w-5 h-5 text-purple-600" />
                    <h2 className="text-xl font-bold text-gray-800">Langues</h2>
                  </div>
                  <button
                    onClick={() => addArrayItem('languages', { name: '', level: '' })}
                    className="px-3 py-1 bg-purple-100 text-purple-600 rounded-lg text-sm font-medium hover:bg-purple-200"
                  >
                    + Ajouter
                  </button>
                </div>
                
                <div className="space-y-3">
                  {portfolioData.languages.map((lang, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <input
                        type="text"
                        value={lang.name}
                        onChange={(e) => updateArrayField('languages', index, 'name', e.target.value)}
                        placeholder="Langue"
                        className="flex-1 px-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      />
                      <select
                        value={lang.level}
                        onChange={(e) => updateArrayField('languages', index, 'level', e.target.value)}
                        className="px-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      >
                        <option value="">Niveau</option>
                        <option value="Natif">Natif</option>
                        <option value="Courant">Courant</option>
                        <option value="Intermédiaire">Intermédiaire</option>
                        <option value="Débutant">Débutant</option>
                      </select>
                      <button
                        onClick={() => removeArrayItem('languages', index)}
                        className="px-2 py-2 text-red-500 hover:bg-red-50 rounded-lg"
                      >
                        ×
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Prévisualisation - Colonne droite sticky - cachée sur mobile */}
            <div className="hidden lg:block sticky top-24 h-fit">
              <div className="bg-white rounded-xl shadow-lg p-4">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-bold text-gray-800">Aperçu en Direct</h3>
                  <div className="flex items-center gap-2">
                    <Palette className="w-4 h-4 text-gray-500" />
                    <select
                      value={theme}
                      onChange={(e) => setTheme(e.target.value)}
                      className="px-3 py-1 border border-gray-200 rounded-lg text-sm"
                    >
                      <option value="modern">Moderne</option>
                      <option value="minimalist">Minimaliste</option>
                      <option value="creative">Créatif</option>
                    </select>
                  </div>
                </div>
                
                <div className="border border-gray-200 rounded-lg overflow-hidden" style={{ height: '75vh', overflowY: 'auto' }}>
                  <div className={`${currentTheme.bg} p-6 min-h-full`}>
                    <div className={`${currentTheme.card} rounded-2xl shadow-xl p-6 max-w-4xl mx-auto`}>
                      <div className="text-center mb-6">
                        {portfolioData.photo && (
                          <div className="flex justify-center mb-4">
                            <img 
                              src={portfolioData.photo} 
                              alt={portfolioData.name}
                              className="w-24 h-24 rounded-full object-cover border-4 border-white shadow-lg"
                            />
                          </div>
                        )}
                        <h1 className="text-3xl font-bold text-gray-900 mb-1">{portfolioData.name}</h1>
                        <p className={`text-lg ${currentTheme.text} font-medium mb-3`}>{portfolioData.title}</p>
                        <p className="text-sm text-gray-600 mb-4">{portfolioData.bio}</p>
                        
                        <div className="flex justify-center gap-3 flex-wrap text-xs">
                          {portfolioData.email && (
                            <span className="flex items-center gap-1 text-gray-600">
                              <Mail className="w-3 h-3" />
                              {portfolioData.email}
                            </span>
                          )}
                          {portfolioData.phone && (
                            <span className="flex items-center gap-1 text-gray-600">
                              <Phone className="w-3 h-3" />
                              {portfolioData.phone}
                            </span>
                          )}
                        </div>
                      </div>

                      {portfolioData.education.length > 0 && (
                        <div className="mb-6">
                          <h2 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
                            <GraduationCap className="w-4 h-4" />
                            Formation
                          </h2>
                          <div className="space-y-3">
                            {portfolioData.education.map((edu, index) => (
                              <div key={index} className={`border-l-3 ${currentTheme.border} pl-3`}>
                                <h3 className="font-bold text-sm text-gray-900">{edu.degree}</h3>
                                <p className={`text-xs ${currentTheme.text} font-medium`}>{edu.school}</p>
                                <p className="text-xs text-gray-500">{edu.year} • {edu.location}</p>
                                {edu.description && <p className="text-xs text-gray-600 mt-1">{edu.description}</p>}
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {portfolioData.certifications.length > 0 && (
                        <div className="mb-6">
                          <h2 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
                            <FileCheck className="w-4 h-4" />
                            Certifications
                          </h2>
                          <div className="space-y-2">
                            {portfolioData.certifications.map((cert, index) => (
                              <div key={index} className="flex items-start gap-2">
                                <Star className={`w-3 h-3 ${currentTheme.text} mt-1 flex-shrink-0`} />
                                <div>
                                  <h3 className="font-bold text-sm text-gray-900">{cert.name}</h3>
                                  <p className="text-xs text-gray-600">{cert.organization} • {cert.year}</p>
                                  {cert.credentialId && <p className="text-xs text-gray-500">ID: {cert.credentialId}</p>}
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {portfolioData.skills.length > 0 && (
                        <div className="mb-6">
                          <h2 className="text-lg font-bold text-gray-900 mb-3">Compétences</h2>
                          <div className="space-y-2">
                            {portfolioData.skills.map((skill, index) => (
                              <div key={index}>
                                <div className="flex justify-between mb-1">
                                  <span className="text-xs font-medium text-gray-700">{skill.name}</span>
                                  <span className="text-xs text-gray-500">{skill.level}%</span>
                                </div>
                                <div className="w-full bg-gray-200 rounded-full h-1.5">
                                  <div 
                                    className={`${currentTheme.accent} h-1.5 rounded-full`}
                                    style={{ width: `${skill.level}%` }}
                                  ></div>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {portfolioData.experiences.length > 0 && (
                        <div className="mb-6">
                          <h2 className="text-lg font-bold text-gray-900 mb-3">Expérience</h2>
                          <div className="space-y-3">
                            {portfolioData.experiences.map((exp, index) => (
                              <div key={index} className={`border-l-3 ${currentTheme.border} pl-3`}>
                                <h3 className="font-bold text-sm text-gray-900">{exp.title}</h3>
                                <p className={`text-xs ${currentTheme.text} font-medium`}>{exp.company}</p>
                                <p className="text-xs text-gray-500 mb-1">{exp.period}</p>
                                <p className="text-xs text-gray-600">{exp.description}</p>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {portfolioData.languages.length > 0 && (
                        <div>
                          <h2 className="text-lg font-bold text-gray-900 mb-3">Langues</h2>
                          <div className="flex flex-wrap gap-2">
                            {portfolioData.languages.map((lang, index) => (
                              <span key={index} className={`px-3 py-1 ${currentTheme.accent} text-white text-xs rounded-full`}>
                                {lang.name} - {lang.level}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          // Mode Prévisualisation Plein Écran
          <div className="bg-white rounded-xl shadow-2xl p-4 sm:p-8 max-w-5xl mx-auto">
            <div id="portfolio-preview-full" className={`${currentTheme.bg} rounded-2xl p-6 sm:p-12`}>
              <div className={`${currentTheme.card} rounded-2xl shadow-xl p-6 sm:p-12`}>
                <div className="text-center mb-8 sm:mb-12">
                  {portfolioData.photo && (
                    <div className="flex justify-center mb-6 sm:mb-8">
                      <img 
                        src={portfolioData.photo} 
                        alt={portfolioData.name}
                        className="w-32 h-32 sm:w-40 sm:h-40 rounded-full object-cover border-4 border-white shadow-2xl"
                      />
                    </div>
                  )}
                  <h1 className="text-3xl sm:text-5xl font-bold text-gray-900 mb-2 sm:mb-3">{portfolioData.name}</h1>
                  <p className={`text-xl sm:text-2xl ${currentTheme.text} font-medium mb-4 sm:mb-6`}>{portfolioData.title}</p>
                  <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8 max-w-3xl mx-auto">{portfolioData.bio}</p>
                  
                  <div className="flex justify-center gap-3 sm:gap-6 flex-wrap text-sm sm:text-base">
                    {portfolioData.email && (
                      <a href={`mailto:${portfolioData.email}`} className="flex items-center gap-2 text-gray-600 hover:text-gray-900">
                        <Mail className="w-5 h-5" />
                        <span>{portfolioData.email}</span>
                      </a>
                    )}
                    {portfolioData.phone && (
                      <a href={`tel:${portfolioData.phone}`} className="flex items-center gap-2 text-gray-600 hover:text-gray-900">
                        <Phone className="w-5 h-5" />
                        <span>{portfolioData.phone}</span>
                      </a>
                    )}
                    {portfolioData.linkedin && (
                      <a href={`https://${portfolioData.linkedin}`} className="flex items-center gap-2 text-gray-600 hover:text-gray-900">
                        <Linkedin className="w-5 h-5" />
                        <span>LinkedIn</span>
                      </a>
                    )}
                  </div>
                </div>

                {/* Formation */}
                {portfolioData.education.length > 0 && (
                  <div className="mb-8 sm:mb-12">
                    <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6 flex items-center gap-2 sm:gap-3">
                      <GraduationCap className="w-6 h-6 sm:w-8 sm:h-8" />
                      Formation & Diplômes
                    </h2>
                    <div className="space-y-4 sm:space-y-6">
                      {portfolioData.education.map((edu, index) => (
                        <div key={index} className={`border-l-4 ${currentTheme.border} pl-4 sm:pl-6 py-2`}>
                          <h3 className="font-bold text-lg sm:text-xl text-gray-900">{edu.degree}</h3>
                          <p className={`${currentTheme.text} font-semibold text-base sm:text-lg`}>{edu.school}</p>
                          <p className="text-sm sm:text-base text-gray-500 mb-2">{edu.year} • {edu.location}</p>
                          {edu.description && <p className="text-sm sm:text-base text-gray-700">{edu.description}</p>}
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Certifications */}
                {portfolioData.certifications.length > 0 && (
                  <div className="mb-8 sm:mb-12">
                    <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6 flex items-center gap-2 sm:gap-3">
                      <FileCheck className="w-6 h-6 sm:w-8 sm:h-8" />
                      Certifications & Attestations
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
                      {portfolioData.certifications.map((cert, index) => (
                        <div key={index} className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl">
                          <Star className={`w-6 h-6 ${currentTheme.text} mt-1 flex-shrink-0`} />
                          <div>
                            <h3 className="font-bold text-lg text-gray-900">{cert.name}</h3>
                            <p className="text-gray-600">{cert.organization}</p>
                            <p className="text-sm text-gray-500">{cert.year}</p>
                            {cert.credentialId && <p className="text-xs text-gray-500 mt-1">ID: {cert.credentialId}</p>}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Compétences */}
                {portfolioData.skills.length > 0 && (
                  <div className="mb-8 sm:mb-12">
                    <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">Compétences Professionnelles</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
                      {portfolioData.skills.map((skill, index) => (
                        <div key={index}>
                          <div className="flex justify-between mb-2">
                            <span className="font-semibold text-gray-700">{skill.name}</span>
                            <span className="text-gray-500">{skill.level}%</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-3">
                            <div 
                              className={`${currentTheme.accent} h-3 rounded-full transition-all duration-500`}
                              style={{ width: `${skill.level}%` }}
                            ></div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Expérience */}
                {portfolioData.experiences.length > 0 && (
                  <div className="mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">Expérience Professionnelle</h2>
                    <div className="space-y-6">
                      {portfolioData.experiences.map((exp, index) => (
                        <div key={index} className={`border-l-4 ${currentTheme.border} pl-6`}>
                          <h3 className="font-bold text-xl text-gray-900">{exp.title}</h3>
                          <p className={`${currentTheme.text} font-semibold text-lg`}>{exp.company}</p>
                          <p className="text-gray-500 mb-3">{exp.period}</p>
                          <p className="text-gray-700">{exp.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Langues */}
                {portfolioData.languages.length > 0 && (
                  <div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">Langues</h2>
                    <div className="flex flex-wrap gap-3">
                      {portfolioData.languages.map((lang, index) => (
                        <span key={index} className={`px-4 py-2 ${currentTheme.accent} text-white text-lg rounded-full font-medium`}>
                          {lang.name} - {lang.level}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}