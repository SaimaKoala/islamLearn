import { useState } from 'react';

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [activeTab, setActiveTab] = useState('home');
  const [bookmarkedPrayers] = useState([]);

  // Home Page Component
  const HomePage = () => {
    const sections = [
      {
        id: 'quran',
        title: 'The Holy Qur\'an',
        description: 'Verses and wisdom from the Holy Quran',
        page: 'quran',
        gradient: 'from-teal-200/60 to-teal-400/60',
        backgroundImage: 'https://images.unsplash.com/photo-1584286595398-a59511e0649d?w=800&h=400&fit=crop',
        size: 'large'
      },
      {
        id: 'prayers',
        title: 'Morning and evening invocations',
        description: 'Daily prayers and supplications',
        page: 'prayers',
        gradient: 'from-blue-200/60 to-blue-400/60',
        backgroundImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=400&fit=crop',
        size: 'large'
      },
      {
        id: 'friday',
        title: 'Friday litanies',
        description: 'Special prayers for Friday',
        page: 'friday',
        gradient: 'from-orange-200/60 to-orange-400/60',
        backgroundImage: 'https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?w=800&h=400&fit=crop',
        size: 'large'
      },
      {
        id: 'prophet',
        title: 'Prayers upon the Prophet ﷺ',
        description: 'Salawat and blessings',
        page: 'prophet',
        gradient: 'from-purple-200/60 to-purple-400/60',
        backgroundImage: 'https://images.unsplash.com/photo-1584467735871-8e85e37e2b6e?w=800&h=400&fit=crop',
        size: 'large'
      },
      {
        id: 'blessed-events',
        title: 'Blessed events',
        description: 'Special occasions',
        page: 'blessed-events',
        gradient: 'from-teal-200/60 to-teal-400/60',
        backgroundImage: 'https://images.unsplash.com/photo-1542816417-0983c9c9ad53?w=800&h=400&fit=crop',
        size: 'small'
      },
      {
        id: 'mawlids',
        title: 'Mawlids, Hadrahs and Poems',
        description: 'Traditional celebrations',
        page: 'mawlids',
        gradient: 'from-blue-200/60 to-blue-400/60',
        backgroundImage: 'https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?w=800&h=400&fit=crop',
        size: 'small'
      },
      {
        id: 'ziyarahs',
        title: 'Ziyārahs (Visits)',
        description: 'Pilgrimage prayers',
        page: 'ziyarahs',
        gradient: 'from-orange-200/60 to-orange-400/60',
        backgroundImage: 'https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?w=800&h=400&fit=crop',
        size: 'small'
      },
      {
        id: 'ahzab',
        title: 'Ahzāb (Litanies)',
        description: 'Spiritual litanies',
        page: 'ahzab',
        gradient: 'from-purple-200/60 to-purple-400/60',
        backgroundImage: 'https://images.unsplash.com/photo-1584467735845-24c10f55dd09?w=800&h=400&fit=crop',
        size: 'small'
      },
      {
        id: 'protection',
        title: 'Prayers for protection',
        description: 'Protective supplications',
        page: 'protection',
        gradient: 'from-teal-200/60 to-teal-400/60',
        backgroundImage: 'https://images.unsplash.com/photo-1584286595398-a59511e0649d?w=800&h=400&fit=crop',
        size: 'small'
      },
      {
        id: 'biographies',
        title: 'Biographies and references',
        description: 'Scholars and references',
        page: 'biographies',
        gradient: 'from-blue-200/60 to-blue-400/60',
        backgroundImage: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=800&h=400&fit=crop',
        size: 'small'
      }
    ];

    const handleSectionClick = (page) => {
      setCurrentPage(page);
    };

    return (
      <div className="h-screen bg-gray-50 p-4 pb-20 overflow-hidden">
        <div className="max-w-4xl mx-auto h-full flex flex-col">
          {/* Header */}
          <div className="text-center mb-4">
            <h1 className="text-2xl font-bold text-gray-800 mb-1">
              Islamic Prayers
            </h1>
            <p className="text-sm text-gray-600">
              Daily prayers and supplications
            </p>
          </div>

          {/* Sections Grid */}
          <div className="grid grid-cols-2 gap-3 flex-1">
            {sections.map((section) => (
              <div
                key={section.id}
                className="relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:scale-105"
                onClick={() => handleSectionClick(section.page)}
                style={{
                  backgroundImage: `url(${section.backgroundImage})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${section.gradient}`}></div>
                <div className="relative z-10 p-3 text-white h-full flex items-center">
                  <div className="flex-1">
                    <h2 className="text-lg font-semibold mb-1 drop-shadow-lg">
                      {section.title}
                    </h2>
                    <p className="text-sm opacity-90 drop-shadow-md">
                      {section.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };

  // Prayers Page Component
  const PrayersPage = () => {


type Prayer = {
  id: string; // or number if you're using numbers
  title?: string;
  description?: string;
   icon: string;
  arabic?: string;
  transliteration?: string;
};

const [bookmarkedPrayers, setBookmarkedPrayers] = useState<Prayer[]>([]);
const [clickedPrayer, setClickedPrayer] = useState<string>('');
const [currentlyPlaying, setCurrentlyPlaying] = useState<string>('');

    const prayers = [
      {
        id: 'entering-toilet',
        title: 'Entering the Toilet',
        description: 'Du\'a to recite before entering the restroom',
        icon: '🚪',
        arabic: 'اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْخُبُثِ وَالْخَبَائِثِ',
        transliteration: 'Allahumma innee a\'oodhu bika minal khubthi wal khabaa\'ith'
      },
      {
        id: 'leaving-toilet',
        title: 'Leaving the Toilet',
        description: 'Du\'a to recite after leaving the restroom',
        icon: '🚪',
        arabic: 'غُفْرَانَكَ',
        transliteration: 'Ghufraanak'
      },
      {
        id: 'before-eating',
        title: 'Before Eating',
        description: 'Du\'a to recite before meals',
        icon: '🍽️',
        arabic: 'بِسْمِ اللَّهِ',
        transliteration: 'Bismillah'
      },
      {
        id: 'after-eating',
        title: 'After Eating',
        description: 'Du\'a to recite after finishing meals',
        icon: '🍽️',
        arabic: 'الْحَمْدُ لِلَّهِ الَّذِي أَطْعَمَنِي هَذَا وَرَزَقَنِيهِ',
        transliteration: 'Alhamdulillahi-lladhee at\'amanee haadha wa razaqaneehi'
      },
      {
        id: 'morning-adhkar',
        title: 'Morning Adhkar',
        description: 'Morning remembrance and supplications',
        icon: '🌅',
        arabic: 'أَذْكَارُ الصَّبَاحِ',
        transliteration: 'Adhkaar as-sabaah'
      },
      {
        id: 'evening-adhkar',
        title: 'Evening Adhkar',
        description: 'Evening remembrance and supplications',
        icon: '🌇',
        arabic: 'أَذْكَارُ الْمَسَاءِ',
        transliteration: 'Adhkaar al-masaa\'i'
      },
      {
        id: 'before-sleep',
        title: 'Before Sleep',
        description: 'Du\'a to recite before going to bed',
        icon: '🛏️',
        arabic: 'بِاسْمِكَ اللَّهُمَّ أَمُوتُ وَأَحْيَا',
        transliteration: 'Bismika Allahumma amootu wa ahyaa'
      },
      {
        id: 'waking-up',
        title: 'Upon Waking Up',
        description: 'Du\'a to recite upon waking from sleep',
        icon: '☀️',
        arabic: 'الْحَمْدُ لِلَّهِ الَّذِي أَحْيَانَا بَعْدَ مَا أَمَاتَنَا',
        transliteration: 'Alhamdulillahi-lladhee ahyaanaa ba\'da maa amaatanaa'
      },
      {
        id: 'leaving-home',
        title: 'Leaving Home',
        description: 'Du\'a to recite when leaving the house',
        icon: '🏠',
        arabic: 'بِسْمِ اللَّهِ تَوَكَّلْتُ عَلَى اللَّهِ',
        transliteration: 'Bismillahi tawakkaltu \'ala Allah'
      },
      {
        id: 'entering-home',
        title: 'Entering Home',
        description: 'Du\'a to recite when entering the house',
        icon: '🏠',
        arabic: 'اللَّهُمَّ إِنِّي أَسْأَلُكَ خَيْرَ الْمَوْلَجِ وَخَيْرَ الْمَخْرَجِ',
        transliteration: 'Allahumma innee as\'aluka khayral-mawlaji wa khayral-makhraji'
      },
      {
        id: 'traveling',
        title: 'For Traveling',
        description: 'Du\'a to recite before and during travel',
        icon: '✈️',
        arabic: 'سُبْحَانَ الَّذِي سَخَّرَ لَنَا هَذَا',
        transliteration: 'Subhaana-lladhee sakhkhara lanaa haadha'
      },
      {
        id: 'seeking-forgiveness',
        title: 'Seeking Forgiveness',
        description: 'Istighfar and repentance prayers',
        icon: '🤲',
        arabic: 'أَسْتَغْفِرُ اللَّهَ الْعَظِيمَ',
        transliteration: 'Astaghfirullaha-l-\'Azeem'
      }
    ];

    const handlePrayerClick = (prayerTitle) => {
      setClickedPrayer(prayerTitle);
      setTimeout(() => setClickedPrayer(''), 2000);
    };

    const handleBookmarkToggle = (prayer, event) => {
      event.stopPropagation();
      
    setBookmarkedPrayers(prev => {
  const isBookmarked = prev.some(p => p.id === prayer.id);
  return isBookmarked
    ? prev.filter(p => p.id !== prayer.id)
    : [...prev, prayer];
});
    };

    const isBookmarked = (prayerId) => {
      return bookmarkedPrayers.some(p => p.id === prayerId);
    };

    const handleAudioPlay = (prayer, event) => {
      event.stopPropagation();
      
      if (window.speechSynthesis.speaking) {
        window.speechSynthesis.cancel();
      }
      
      if (currentlyPlaying === prayer.id) {
        setCurrentlyPlaying('');
        return;
      }
      
      if ('speechSynthesis' in window) {
        const utterance = new SpeechSynthesisUtterance(prayer.transliteration);
        utterance.rate = 0.7;
        utterance.pitch = 1;
        utterance.volume = 1;
        
        const voices = window.speechSynthesis.getVoices();
        const arabicVoice = voices.find(voice => 
          voice.lang.includes('ar') || voice.name.includes('Arabic')
        );
        
        if (arabicVoice) {
          utterance.voice = arabicVoice;
          utterance.text = prayer.arabic;
        }
        
        utterance.onstart = () => {
          setCurrentlyPlaying(prayer.id);
        };
        
        utterance.onend = () => {
          setCurrentlyPlaying('');
        };
        
        utterance.onerror = () => {
          setCurrentlyPlaying('');
          setClickedPrayer('Audio not supported on this device');
          setTimeout(() => setClickedPrayer(''), 2000);
        };
        
        window.speechSynthesis.speak(utterance);
      } else {
        setClickedPrayer('Audio not supported on this device');
        setTimeout(() => setClickedPrayer(''), 2000);
      }
    };

    const handleBackToHome = () => {
      setCurrentPage('home');
    };

    return (
      <div className="min-h-screen bg-gray-50 p-4 pb-20">
        <div className="max-w-md mx-auto">
          {/* Header */}
          <div className="text-center mb-8 pt-4">
            <button 
              onClick={handleBackToHome}
              className="inline-flex items-center text-teal-600 hover:text-teal-800 mb-4 transition-colors"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Home
            </button>
            <h1 className="text-2xl font-bold text-gray-800 mb-4">
              Morning and evening invocations
            </h1>
            <p className="text-base text-gray-600">
              Supplications for different times and situations
            </p>
          </div>

          {/* Click Feedback */}
          {clickedPrayer && (
            <div className="bg-teal-100 border border-teal-200 text-teal-800 px-4 py-3 rounded-xl mb-6 text-center">
              <p>You selected: <strong>{clickedPrayer}</strong></p>
              <p className="text-sm">In your app, this would show the full prayer text and translation</p>
            </div>
          )}

          {/* Prayer Sections */}
          <div className="space-y-4">
            {prayers.map((prayer) => (
              <div
                key={prayer.id}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:scale-105"
                onClick={() => handlePrayerClick(prayer.title)}
              >
                <div className="p-4">
                  <div className="flex items-start justify-between">
                    <div className="flex-1 pr-4">
                      <h2 className="text-lg font-semibold text-gray-800 mb-1">
                        {prayer.title}
                      </h2>
                      <p className="text-gray-600 text-sm mb-2">
                        {prayer.description}
                      </p>
                      <p className="text-teal-700 text-base mb-1 font-medium">
                        {prayer.arabic}
                      </p>
                      <p className="text-teal-600 text-xs italic">
                        {prayer.transliteration}
                      </p>
                    </div>
                    <div className="flex items-center space-x-2 flex-shrink-0">
                      <button
                        onClick={(e) => handleBookmarkToggle(prayer, e)}
                        className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                        title={isBookmarked(prayer.id) ? "Remove bookmark" : "Add bookmark"}
                      >
                        <svg 
                          className={`w-5 h-5 ${isBookmarked(prayer.id) ? 'text-yellow-500 fill-current' : 'text-gray-400'}`}
                          fill={isBookmarked(prayer.id) ? 'currentColor' : 'none'}
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                        </svg>
                      </button>
                      <button
                        onClick={(e) => handleAudioPlay(prayer, e)}
                        className="p-2 hover:bg-teal-100 rounded-full transition-colors"
                        title="Play audio"
                      >
                        {currentlyPlaying === prayer.id ? (
                          <svg className="w-5 h-5 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 10h6v4H9V10z" />
                          </svg>
                        ) : (
                          <svg className="w-5 h-5 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 8l-5 3v6l5-3V8z" />
                          </svg>
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Add More Section */}
          <div className="mt-8 mb-20">
            <div className="bg-white rounded-2xl shadow-lg border-2 border-dashed border-teal-300 hover:border-teal-400 transition-colors cursor-pointer">
              <div className="p-6 text-center">
                <h3 className="text-lg font-semibold text-gray-700 mb-2">Add More Prayers</h3>
                <p className="text-gray-500 text-sm">Click to add additional prayers and supplications</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  // Bookmarks Page Component


  const BookmarksPage = () => {

    type Prayer = {
  id: string; // or number if you're using numbers
  title?: string;
  description?: string;
   icon: string;
  arabic?: string;
  transliteration?: string;
};

const [bookmarkedPrayers, setBookmarkedPrayers] = useState<Prayer[]>([]);

    const handleBackToHome = () => {
      setCurrentPage('home');
    };

    const handleRemoveBookmark = (prayerId) => {
      setBookmarkedPrayers(prev => prev.filter(p => p.id !== prayerId));
    };

    return (
      <div className="min-h-screen bg-gray-50 p-4 pb-20">
        <div className="max-w-md mx-auto">
          {/* Header */}
          <div className="text-center mb-8 pt-4">
            <button 
              onClick={handleBackToHome}
              className="inline-flex items-center text-teal-600 hover:text-teal-800 mb-4 transition-colors"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Home
            </button>
            <h1 className="text-2xl font-bold text-gray-800 mb-4">
              Bookmarked Prayers
            </h1>
            <p className="text-base text-gray-600">
              Your saved prayers and supplications
            </p>
          </div>

          {/* Bookmarked Prayers */}
          {bookmarkedPrayers.length > 0 ? (
            <div className="space-y-4">
              {bookmarkedPrayers.map((prayer) => (
                <div
                  key={prayer.id}
                  className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="p-4">
                    <div className="flex items-start justify-between">
                      <div className="flex-1 pr-4">
                        <h2 className="text-lg font-semibold text-gray-800 mb-1">
                          {prayer.title}
                        </h2>
                        <p className="text-gray-600 text-sm mb-2">
                          {prayer.description}
                        </p>
                        <p className="text-teal-700 text-base mb-1 font-medium">
                          {prayer.arabic}
                        </p>
                        <p className="text-teal-600 text-xs italic">
                          {prayer.transliteration}
                        </p>
                      </div>
                      <button
                        onClick={() => handleRemoveBookmark(prayer.id)}
                        className="p-2 hover:bg-red-100 rounded-full transition-colors"
                        title="Remove bookmark"
                      >
                        <svg className="w-5 h-5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <svg className="w-16 h-16 text-gray-300 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
              </svg>
              <h3 className="text-lg font-semibold text-gray-600 mb-2">No bookmarks yet</h3>
              <p className="text-gray-500 text-sm">
                Start bookmarking prayers to access them quickly
              </p>
            </div>
          )}
        </div>
      </div>
    );
  };

  // Feeds Page Component
  const FeedsPage = () => {
    const handleBackToHome = () => {
      setCurrentPage('home');
    };

    return (
      <div className="min-h-screen bg-gray-50 p-4 pb-20">
        <div className="max-w-md mx-auto">
          <div className="text-center mb-8 pt-4">
            <button 
              onClick={handleBackToHome}
              className="inline-flex items-center text-teal-600 hover:text-teal-800 mb-4 transition-colors"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Home
            </button>
            <div className="text-4xl mb-4">📡</div>
            <h1 className="text-2xl font-bold text-gray-800 mb-4">Feeds</h1>
            <p className="text-gray-600">This page is under construction</p>
          </div>
        </div>
      </div>
    );
  };

  // Bottom Navigation Component
  const BottomNavigation = () => {
    const navItems = [
      { id: 'home', label: 'Home', icon: 'home' },
      { id: 'bookmarks', label: 'Bookmarks', icon: 'bookmark' },
      { id: 'feeds', label: 'Feeds', icon: 'rss' }
    ];

    const handleTabClick = (tabId) => {
      setActiveTab(tabId);
      if (tabId === 'home') {
        setCurrentPage('home');
      } else {
        setCurrentPage(tabId);
      }
    };

    const renderIcon = (iconType) => {
      const isActive = activeTab === iconType;
      const iconClass = `w-6 h-6 ${isActive ? 'text-teal-600' : 'text-gray-400'}`;
      
      switch (iconType) {
        case 'home':
          return (
            <svg className={iconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
          );
        case 'bookmark':
          return (
            <svg className={iconClass} fill={isActive ? 'currentColor' : 'none'} stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
            </svg>
          );
        case 'rss':
          return (
            <svg className={iconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 5c7.18 0 13 5.82 13 13M6 11a7 7 0 017 7m-6 0a1 1 0 11-2 0 1 1 0 012 0z" />
            </svg>
          );
        default:
          return null;
      }
    };

    return (
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-4 py-2">
        <div className="flex justify-around items-center max-w-md mx-auto">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleTabClick(item.id)}
              className={`flex flex-col items-center space-y-1 py-2 px-3 rounded-lg transition-colors relative ${
                activeTab === item.id 
                  ? 'text-teal-600' 
                  : 'text-gray-400 hover:text-gray-600'
              }`}
            >
              {renderIcon(item.icon)}
              <span className="text-xs font-medium">{item.label}</span>
              {item.id === 'bookmarks' && bookmarkedPrayers.length > 0 && (
                <div className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {bookmarkedPrayers.length}
                </div>
              )}
            </button>
          ))}
        </div>
      </div>
    );
  };

  const PlaceholderPage = ({ title, icon }) => (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-md mx-auto">
        <div className="text-center mb-8 pt-4">
          <button 
            onClick={() => setCurrentPage('home')}
            className="inline-flex items-center text-teal-600 hover:text-teal-800 mb-4 transition-colors"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Home
          </button>
          <div className="text-4xl mb-4">{icon}</div>
          <h1 className="text-2xl font-bold text-gray-800 mb-4">{title}</h1>
          <p className="text-gray-600">This page is under construction</p>
        </div>
      </div>
    </div>
  );

  // Render current page
  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage />;
      case 'prayers':
        return <PrayersPage />;
      case 'bookmarks':
        return <BookmarksPage />;
      case 'feeds':
        return <FeedsPage />;
      case 'quran':
        return <PlaceholderPage title="The Holy Qur'an" icon="📖" />;
      case 'friday':
        return <PlaceholderPage title="Friday litanies" icon="🕌" />;
      case 'prophet':
        return <PlaceholderPage title="Prayers upon the Prophet ﷺ" icon="💫" />;
      case 'blessed-events':
        return <PlaceholderPage title="Blessed events" icon="✨" />;
      case 'mawlids':
        return <PlaceholderPage title="Mawlids, Hadrahs and Poems" icon="🎭" />;
      case 'ziyarahs':
        return <PlaceholderPage title="Ziyārahs (Visits)" icon="🕋" />;
      case 'ahzab':
        return <PlaceholderPage title="Ahzāb (Litanies)" icon="📿" />;
      case 'protection':
        return <PlaceholderPage title="Prayers for protection" icon="🛡️" />;
      case 'biographies':
        return <PlaceholderPage title="Biographies and references" icon="📚" />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="font-sans">
      {renderCurrentPage()}
      <BottomNavigation />
    </div>
  );
};

export default App;