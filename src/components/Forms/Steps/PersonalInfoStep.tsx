import React from 'react';

interface PersonalInfoStepProps {
  data: {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    password: string;
    confirmPassword: string;
  };
  onChange: (data: any) => void;
  onNext: () => void;
}

const PersonalInfoStep: React.FC<PersonalInfoStepProps> = ({ data, onChange, onNext }) => {
  const handleInputChange = (field: string, value: string) => {
    onChange({ ...data, [field]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (data.firstName && data.lastName && data.email && data.phone && data.password && data.confirmPassword) {
      if (data.password === data.confirmPassword) {
        onNext();
      } else {
        alert('Les mots de passe ne correspondent pas');
      }
    } else {
      alert('Veuillez remplir tous les champs');
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-bold text-primary mb-6">Informations personnelles</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-secondary mb-2">Prénom</label>
            <input
              type="text"
              value={data.firstName}
              onChange={(e) => handleInputChange('firstName', e.target.value)}
              className="w-full px-4 py-3 border border-light-gray rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-secondary mb-2">Nom</label>
            <input
              type="text"
              value={data.lastName}
              onChange={(e) => handleInputChange('lastName', e.target.value)}
              className="w-full px-4 py-3 border border-light-gray rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              required
            />
          </div>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-secondary mb-2">Email</label>
          <input
            type="email"
            value={data.email}
            onChange={(e) => handleInputChange('email', e.target.value)}
            className="w-full px-4 py-3 border border-light-gray rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
            required
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-secondary mb-2">Téléphone</label>
          <input
            type="tel"
            value={data.phone}
            onChange={(e) => handleInputChange('phone', e.target.value)}
            className="w-full px-4 py-3 border border-light-gray rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
            required
          />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-secondary mb-2">Mot de passe</label>
            <input
              type="password"
              value={data.password}
              onChange={(e) => handleInputChange('password', e.target.value)}
              className="w-full px-4 py-3 border border-light-gray rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-secondary mb-2">Confirmer le mot de passe</label>
            <input
              type="password"
              value={data.confirmPassword}
              onChange={(e) => handleInputChange('confirmPassword', e.target.value)}
              className="w-full px-4 py-3 border border-light-gray rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              required
            />
          </div>
        </div>
        
        <div className="flex justify-end mt-6">
          <button
            type="submit"
            className="px-8 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary-light transition-all"
          >
            Suivant
          </button>
        </div>
      </form>
    </div>
  );
};

export default PersonalInfoStep;