import React from 'react';

interface PreparationStepProps {
  data: {
    hostingFrequency: string;
    accommodationType: string;
    guestTypes: string[];
    stayDuration: string;
  };
  onChange: (data: any) => void;
  onNext: () => void;
  onPrevious: () => void;
}

const PreparationStep: React.FC<PreparationStepProps> = ({ data, onChange, onNext, onPrevious }) => {
  const hostingFrequencies = [
    { value: 'occasional', label: 'Occasionnellement (quelques fois par an)' },
    { value: 'regular', label: 'Régulièrement (plusieurs fois par mois)' },
    { value: 'frequent', label: 'Fréquemment (plusieurs fois par semaine)' },
    { value: 'fulltime', label: 'À temps plein (activité principale)' }
  ];

  const accommodationTypes = [
    { value: 'entire_place', label: 'Logement entier' },
    { value: 'private_room', label: 'Chambre privée' },
    { value: 'shared_room', label: 'Chambre partagée' },
    { value: 'multiple_rooms', label: 'Plusieurs chambres' }
  ];

  const guestTypeOptions = [
    'Voyageurs d\'affaires',
    'Familles avec enfants',
    'Couples',
    'Groupes d\'amis',
    'Voyageurs solo',
    'Étudiants'
  ];

  const stayDurations = [
    { value: 'short', label: 'Courts séjours (1-3 nuits)' },
    { value: 'medium', label: 'Séjours moyens (4-7 nuits)' },
    { value: 'long', label: 'Longs séjours (1 semaine et plus)' },
    { value: 'flexible', label: 'Flexible selon les demandes' }
  ];

  const handleInputChange = (field: string, value: any) => {
    onChange({ ...data, [field]: value });
  };

  const handleGuestTypeToggle = (guestType: string) => {
    const updatedTypes = data.guestTypes.includes(guestType)
      ? data.guestTypes.filter(t => t !== guestType)
      : [...data.guestTypes, guestType];
    handleInputChange('guestTypes', updatedTypes);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (data.hostingFrequency && data.accommodationType && data.stayDuration) {
      onNext();
    } else {
      alert('Veuillez remplir tous les champs obligatoires');
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-bold text-primary mb-6">Préparation à l'hébergement</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-secondary mb-3">À quelle fréquence souhaitez-vous héberger ? *</label>
          <div className="space-y-2">
            {hostingFrequencies.map(freq => (
              <label key={freq.value} className="flex items-center p-3 border border-light-gray rounded-lg cursor-pointer hover:border-primary transition-colors">
                <input
                  type="radio"
                  name="hostingFrequency"
                  value={freq.value}
                  checked={data.hostingFrequency === freq.value}
                  onChange={(e) => handleInputChange('hostingFrequency', e.target.value)}
                  className="mr-3 text-primary"
                />
                <span className="text-secondary">{freq.label}</span>
              </label>
            ))}
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-secondary mb-3">Type d'hébergement proposé *</label>
          <div className="space-y-2">
            {accommodationTypes.map(type => (
              <label key={type.value} className="flex items-center p-3 border border-light-gray rounded-lg cursor-pointer hover:border-primary transition-colors">
                <input
                  type="radio"
                  name="accommodationType"
                  value={type.value}
                  checked={data.accommodationType === type.value}
                  onChange={(e) => handleInputChange('accommodationType', e.target.value)}
                  className="mr-3 text-primary"
                />
                <span className="text-secondary">{type.label}</span>
              </label>
            ))}
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-secondary mb-3">Types de voyageurs que vous souhaitez accueillir</label>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {guestTypeOptions.map(guestType => (
              <label key={guestType} className="flex items-center p-3 border border-light-gray rounded-lg cursor-pointer hover:border-primary transition-colors">
                <input
                  type="checkbox"
                  checked={data.guestTypes.includes(guestType)}
                  onChange={() => handleGuestTypeToggle(guestType)}
                  className="mr-3 text-primary rounded"
                />
                <span className="text-sm text-secondary">{guestType}</span>
              </label>
            ))}
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-secondary mb-3">Durée de séjour préférée *</label>
          <div className="space-y-2">
            {stayDurations.map(duration => (
              <label key={duration.value} className="flex items-center p-3 border border-light-gray rounded-lg cursor-pointer hover:border-primary transition-colors">
                <input
                  type="radio"
                  name="stayDuration"
                  value={duration.value}
                  checked={data.stayDuration === duration.value}
                  onChange={(e) => handleInputChange('stayDuration', e.target.value)}
                  className="mr-3 text-primary"
                />
                <span className="text-secondary">{duration.label}</span>
              </label>
            ))}
          </div>
        </div>

        <div className="flex justify-between mt-6">
          <button
            type="button"
            onClick={onPrevious}
            className="px-6 py-3 bg-gray-200 text-gray-700 font-medium rounded-lg hover:bg-gray-300 transition-all"
          >
            Retour
          </button>
          <button
            type="submit"
            className="px-8 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary-light transition-all"
          >
            Terminer
          </button>
        </div>
      </form>
    </div>
  );
};

export default PreparationStep;