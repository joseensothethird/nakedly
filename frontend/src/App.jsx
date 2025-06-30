import { lazy, Suspense, useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './assets/Components/Header/Navbar';
import Footer from './assets/Components/Footer/Footer';
import LazyLoading from './assets/Components/LazyLoading/lazyloading.jsx';

// 1. Force fresh load + minimum loading time
const lazyWithLoading = (componentImport) => {
  return lazy(async () => {
    const startTime = performance.now();
    const component = await componentImport();
    const loadTime = performance.now() - startTime;
    
    // Ensure loading shows for at least 500ms (even on fast networks)
    if (loadTime < 500) {
      await new Promise(resolve => setTimeout(resolve, 500 - loadTime));
    }
    
    return component;
  });
};

// 2. Apply to all components
const Home = lazyWithLoading(() => import('./assets/Pages/Home'));
const AboutUs = lazyWithLoading(() => import('./assets/Pages/Information_Pages/About-Us'));
const TermsPolicy = lazyWithLoading(() => import('./assets/Pages/Information_Pages/TermsService'));
const PrivacyPolicy = lazyWithLoading(() => import('./assets/Pages/Information_Pages/PrivacyPolicy'));
const DMCA = lazyWithLoading(() => import('./assets/Pages/Information_Pages/DMC'));
const Model_Terms = lazyWithLoading(() => import('./assets/Pages/Information_Pages/Model_Terms'));

const Login = lazyWithLoading(() => import('./assets/Pages/Auth/Login'));
const SignUp = lazyWithLoading(() => import('./assets/Pages/Auth/SignUp'));
const RoleSelectionPage = lazyWithLoading(() => import('./assets/Pages/Auth/RoleSelection'));

const ContactUs = lazyWithLoading(() => import('./assets/Pages/Information_Pages/ContactUs.jsx'));

const NewsFeed = lazyWithLoading(() => import('./assets/Pages/NewsFeed.jsx'));
const HomeFeed = lazyWithLoading(() => import('./assets/Components/Sections/Feeds-Content/HomeFeeds'));
const NotificationsFeed = lazyWithLoading(() => import('./assets/Components/Sections/Feeds-Content/NotificationsFeed'));
const MessagesFeed = lazyWithLoading(() => import('./assets/Components/Sections/Feeds-Content/MessagesFeed'));
const CollectionsFeed = lazyWithLoading(() => import('./assets/Components/Sections/Feeds-Content/CollectionsFeed'));
const SubscriptionsFeed = lazyWithLoading(() => import('./assets/Components/Sections/Feeds-Content/SubscriptionsFeed'));
const AddCardFeed = lazyWithLoading(() => import('./assets/Components/Sections/Feeds-Content/Add_Card'));
const ProfileFeed = lazyWithLoading(() => import('./assets/Components/Sections/Feeds-Content/ProfileFeed'));
const SettingsFeed = lazyWithLoading(() => import('./assets/Components/Sections/Feeds-Content/SettingsFeed'));

const Creator = lazyWithLoading(() => import('./assets/Components/Sections/Channel_Card.jsx'));

const FloatingChatbot = lazyWithLoading(() => import('./assets/Components/ChatBot/Chatbot.jsx'));

function App() {
  const location = useLocation();
  const [isNavigating, setIsNavigating] = useState(false);

  // 3. Track navigation state
  useEffect(() => {
    const handleStart = () => setIsNavigating(true);
    const handleComplete = () => setIsNavigating(false);

    // Simulate navigation delay (remove if using actual route loading events)
    handleStart();
    const timer = setTimeout(handleComplete, 1000);

    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <>
      <Navbar />
      
      {/* 4. Show spinner during both navigation AND suspense loading */}
      {(isNavigating || location.state?.isLoading) && <LazyLoading />}

      <Suspense fallback={<LazyLoading />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/terms-and-service" element={<TermsPolicy />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/dmca" element={<DMCA />} />
          <Route path="/model-terms" element={<Model_Terms />} />

          {/* Auth */}
          <Route path="/role-selection" element={<RoleSelectionPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />

           {/* Channel Cards */}
            <Route path="/creator" element={<Creator />} />
          {/* Feeds */}
          <Route path="/nakedly" element={<NewsFeed />}>
            <Route index element={<HomeFeed />} />
            <Route path="notifications" element={<NotificationsFeed />} />
            <Route path="messages" element={<MessagesFeed />} />
            <Route path="collections" element={<CollectionsFeed />} />
            <Route path="subscriptions" element={<SubscriptionsFeed />} />
            <Route path="add-card" element={<AddCardFeed />} />
            <Route path="profile" element={<ProfileFeed />} />
            <Route path="settings" element={<SettingsFeed />} />
          </Route>
        </Routes>
      </Suspense>
      
      <FloatingChatbot />
      <Footer />
    </>
  );
}

export default App;