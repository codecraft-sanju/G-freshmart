import { useState, useEffect, useRef } from "react";

// --- Icons ---
const ShoppingBagIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
    <path d="M3 6h18" />
    <path d="M16 10a4 4 0 0 1-8 0" />
  </svg>
);

const TruckIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 18H3c-.6 0-1-.4-1-1V7c0-.6.4-1 1-1h10c.6 0 1 .4 1 1v11" />
    <path d="M14 9h4l4 4v5c0 .6-.4 1-1 1h-2" />
    <circle cx="7" cy="18" r="2" />
    <circle cx="17" cy="18" r="2" />
  </svg>
);

const CreditCardIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="14" x="2" y="5" rx="2" />
    <line x1="2" x2="22" y1="10" y2="10" />
  </svg>
);

const CheckIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
    <polyline points="22 4 12 14.01 9 11.01" />
  </svg>
);

const CloseIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

const PlusIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="12" y1="5" x2="12" y2="19" />
    <line x1="5" y1="12" x2="19" y2="12" />
  </svg>
);

const MinusIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="5" y1="12" x2="19" y2="12" />
  </svg>
);

const SearchIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="8" />
    <line x1="21" y1="21" x2="16.65" y2="16.65" />
  </svg>
);

const StoreIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="m2 7 4.41-4.41A2 2 0 0 1 7.83 2h8.34a2 2 0 0 1 1.42.59L22 7" />
    <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
    <path d="M15 22v-4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4" />
    <path d="M2 7h20" />
    <path d="M22 7v3a2 2 0 0 1-2 2v0a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 16 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 12 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 8 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 4 12v0a2 2 0 0 1-2-2V7" />
  </svg>
);

const StarIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" stroke="none">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
  </svg>
);

// --- Components ---
function Preloader({ onComplete }) {
  const [opacity, setOpacity] = useState("opacity-100");

  useEffect(() => {
    const timer1 = setTimeout(() => {
      setOpacity("opacity-0");
    }, 1200);
    const timer2 = setTimeout(() => {
      onComplete();
    }, 1700);
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, [onComplete]);

  return (
    <div className={`fixed inset-0 z-[100] bg-white flex flex-col items-center justify-center transition-opacity duration-500 ease-in-out ${opacity}`}>
      <div className="w-12 h-12 border-4 border-slate-200 border-t-[#155e2d] rounded-full animate-spin mb-4"></div>
      <div className="text-[#155e2d] font-bold tracking-widest uppercase text-sm animate-pulse">
        Loading G-Fresh
      </div>
    </div>
  );
}

function Reveal({ children, delay = "", className = "", threshold = 0.1 }) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold, rootMargin: "0px 0px -50px 0px" }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 cubic-bezier(0.16, 1, 0.3, 1) ${
        isVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-10 scale-95"
      } ${delay} ${className}`}
    >
      {children}
    </div>
  );
}

function useCountdown(targetDate) {
  const calc = () => {
    const diff = new Date(targetDate) - Date.now();
    if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    return {
      days: Math.floor(diff / 86400000),
      hours: Math.floor((diff % 86400000) / 3600000),
      minutes: Math.floor((diff % 3600000) / 60000),
      seconds: Math.floor((diff % 60000) / 1000),
    };
  };
  const [time, setTime] = useState(calc);
  useEffect(() => {
    const id = setInterval(() => setTime(calc()), 1000);
    return () => clearInterval(id);
  }, [targetDate]);
  return time;
}

function DigitBox({ value, label }) {
  const str = String(value).padStart(2, "0");
  return (
    <div className="flex flex-col items-center gap-2 group">
      <div className="w-16 h-20 md:w-20 md:h-24 flex items-center justify-center bg-white border border-slate-200 rounded-2xl shadow-sm transition-transform duration-300 group-hover:-translate-y-1 group-hover:shadow-md group-hover:border-[#22c55e]/50">
        <span className="text-3xl md:text-4xl font-bold text-slate-800 tracking-tight">
          {str}
        </span>
      </div>
      <span className="text-[10px] md:text-xs font-bold uppercase tracking-wider text-slate-500 transition-colors duration-300 group-hover:text-[#155e2d]">
        {label}
      </span>
    </div>
  );
}

function FeatureCard({ icon, title, desc, delay }) {
  return (
    <Reveal delay={delay}>
      <div className="bg-white border border-slate-200 rounded-[2rem] p-8 flex flex-col items-start transition-all duration-500 hover:border-[#22c55e] hover:shadow-2xl hover:shadow-[#155e2d]/10 hover:-translate-y-2 group cursor-default h-full">
        <div className="w-14 h-14 rounded-2xl bg-slate-50 text-slate-600 flex items-center justify-center mb-6 shadow-sm transition-all duration-500 group-hover:bg-[#155e2d] group-hover:text-white group-hover:scale-110 group-hover:rotate-3">
          {icon}
        </div>
        <h3 className="font-bold text-xl mb-3 text-slate-900 tracking-tight transition-colors duration-300 group-hover:text-[#155e2d]">
          {title}
        </h3>
        <p className="text-sm leading-relaxed text-slate-600">
          {desc}
        </p>
      </div>
    </Reveal>
  );
}

// --- Prototype Modal Component ---
function PrototypeModal({ onClose }) {
  const [view, setView] = useState("shop");
  const [cart, setCart] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const products = [
    { id: 1, name: "Fresh Apples (1kg)", price: 150, category: "Fruits", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6pNMjiSYAaV6we-irbnux7cG4LvAgkXqBQQ&s" },
    { id: 2, name: "Farm Fresh Milk (1L)", price: 60, category: "Dairy", image: "https://images.unsplash.com/photo-1550583724-b2692b85b150?auto=format&fit=crop&w=400&q=80" },
    { id: 3, name: "Whole Wheat Bread", price: 40, category: "Bakery", image: "https://images.unsplash.com/photo-1598373182133-52452f7691ef?auto=format&fit=crop&w=400&q=80" },
    { id: 4, name: "Premium Basmati Rice", price: 120, category: "Pantry", image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=400&q=80" },
    { id: 5, name: "Organic Bananas (12pcs)", price: 80, category: "Fruits", image: "https://images.unsplash.com/photo-1571501478200-720616119569?auto=format&fit=crop&w=400&q=80" },
    { id: 6, name: "Amul Butter (500g)", price: 260, category: "Dairy", image: "https://images.unsplash.com/photo-1589985270826-4b7bb135bc9d?auto=format&fit=crop&w=400&q=80" },
  ];

  const categories = ["All", "Fruits", "Dairy", "Bakery", "Pantry"];

  const filteredProducts = products.filter(p => {
    const matchesCategory = activeCategory === "All" || p.category === activeCategory;
    const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const addToCart = (product) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) => item.id === product.id ? { ...item, qty: item.qty + 1 } : item);
      }
      return [...prev, { ...product, qty: 1 }];
    });
  };

  const removeFromCart = (id) => {
    setCart((prev) => prev.map((item) => item.id === id ? { ...item, qty: item.qty - 1 } : item).filter(item => item.qty > 0));
  };

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
  const shipping = subtotal > 0 ? 30 : 0;
  const total = subtotal + shipping;

  const handleCheckout = () => setView("checkout");
  
  const handlePayment = () => {
    setView("processing");
    setTimeout(() => {
      setView("tracking");
      setCart([]);
    }, 2000);
  };

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-2 md:p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-300">
      <div className="bg-white w-full max-w-5xl h-[95vh] md:h-[85vh] rounded-3xl shadow-2xl flex flex-col overflow-hidden relative animate-in zoom-in-95 duration-300">
        
        {/* Header */}
        <div className="flex items-center justify-between px-4 md:px-6 py-4 border-b border-slate-100 bg-white shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-[#155e2d] flex items-center justify-center text-white shadow-md">
              <ShoppingBagIcon />
            </div>
            <h2 className="font-bold text-lg text-slate-900">App Prototype</h2>
          </div>
          <button onClick={onClose} className="p-2 rounded-full hover:bg-slate-100 text-slate-500 transition-colors">
            <CloseIcon />
          </button>
        </div>

        {/* Body (Responsive Flex Layout fixes items on mobile) */}
        <div className="flex-1 overflow-y-auto md:overflow-hidden bg-slate-50 flex flex-col md:flex-row">
          
          {view === "shop" && (
            <>
              {/* Products Grid */}
              <div className="flex-1 flex flex-col md:overflow-hidden">
                <div className="p-4 md:p-8 pb-4 shrink-0 bg-white border-b border-slate-100">
                  <div className="relative mb-6">
                    <div className="absolute inset-y-0 left-4 flex items-center text-slate-400">
                      <SearchIcon />
                    </div>
                    <input 
                      type="text" 
                      placeholder="Search Aashapura Mall products..." 
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl py-3 pl-12 pr-4 text-slate-900 focus:outline-none focus:border-[#22c55e] focus:ring-1 focus:ring-[#22c55e] transition-colors"
                    />
                  </div>
                  <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
                    {categories.map(cat => (
                      <button 
                        key={cat}
                        onClick={() => setActiveCategory(cat)}
                        className={`px-4 py-2 rounded-full text-sm font-semibold whitespace-nowrap transition-colors ${
                          activeCategory === cat 
                            ? "bg-[#155e2d] text-white" 
                            : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                        }`}
                      >
                        {cat}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="flex-1 p-4 md:p-8 overflow-y-auto">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                    {filteredProducts.map((p) => (
                      <div key={p.id} className="bg-white border border-slate-200 rounded-2xl shadow-sm hover:shadow-md transition-shadow flex flex-col overflow-hidden group">
                        <div className="h-40 sm:h-48 w-full bg-slate-100 overflow-hidden relative">
                          <img 
                            src={p.image} 
                            alt={p.name} 
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
                          <div className="absolute top-3 right-3 bg-white/90 backdrop-blur text-xs font-bold px-2 py-1 rounded text-slate-700 shadow-sm">
                            {p.category}
                          </div>
                        </div>
                        <div className="p-5 flex flex-col flex-1 text-center bg-white z-10 relative">
                          <h4 className="font-bold text-slate-900 mb-1">{p.name}</h4>
                          <p className="text-slate-500 font-medium mb-4">₹{p.price}</p>
                          <button 
                            onClick={() => addToCart(p)}
                            className="mt-auto w-full py-3 rounded-xl border-2 border-[#22c55e] text-[#155e2d] font-bold hover:bg-[#22c55e] hover:text-white transition-colors active:scale-95"
                          >
                            Add to Cart
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Cart Sidebar */}
              <div className="w-full md:w-96 bg-white border-t md:border-t-0 md:border-l border-slate-200 flex flex-col shrink-0">
                <div className="p-4 md:p-6 border-b border-slate-100 shrink-0">
                  <h3 className="font-bold text-lg text-slate-900">Your Cart</h3>
                </div>
                
                {/* Scrollable Cart Items */}
                <div className="flex-1 overflow-y-auto p-4 md:p-6 space-y-4 max-h-[35vh] md:max-h-none">
                  {cart.length === 0 ? (
                    <div className="h-full flex flex-col items-center justify-center text-slate-400 py-10 md:py-0">
                      <ShoppingBagIcon />
                      <p className="mt-2 text-sm font-medium">Cart is empty</p>
                    </div>
                  ) : (
                    cart.map((item) => (
                      <div key={item.id} className="flex items-center justify-between bg-slate-50 p-3 rounded-xl border border-slate-100">
                        <div className="flex items-center gap-3">
                          <img src={item.image} alt={item.name} className="w-12 h-12 rounded-lg object-cover shadow-sm" />
                          <div>
                            <p className="font-bold text-sm text-slate-900 line-clamp-1">{item.name}</p>
                            <p className="text-[#155e2d] font-semibold text-xs">₹{item.price}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2 bg-white rounded-lg p-1 border border-slate-200 shadow-sm shrink-0">
                          <button onClick={() => removeFromCart(item.id)} className="p-1.5 hover:bg-slate-50 rounded text-slate-600 transition-colors"><MinusIcon /></button>
                          <span className="text-sm font-bold w-4 text-center">{item.qty}</span>
                          <button onClick={() => addToCart(item)} className="p-1.5 hover:bg-slate-50 rounded text-slate-600 transition-colors"><PlusIcon /></button>
                        </div>
                      </div>
                    ))
                  )}
                </div>

                <div className="p-4 md:p-6 bg-slate-50 border-t border-slate-200 shrink-0">
                  <div className="space-y-2 mb-4 text-sm">
                    <div className="flex justify-between text-slate-600">
                      <span>Subtotal</span>
                      <span className="font-semibold text-slate-900">₹{subtotal}</span>
                    </div>
                    <div className="flex justify-between text-slate-600">
                      <span>Delivery Fee</span>
                      <span className="font-semibold text-slate-900">₹{shipping}</span>
                    </div>
                    <div className="flex justify-between pt-3 mt-1 border-t border-slate-200">
                      <span className="font-bold text-slate-900">Total</span>
                      <span className="font-bold text-[#155e2d] text-lg">₹{total}</span>
                    </div>
                  </div>
                  <button 
                    disabled={cart.length === 0}
                    onClick={handleCheckout}
                    className="w-full py-4 rounded-xl font-bold bg-[#155e2d] text-white hover:bg-[#104a23] transition-colors disabled:opacity-50 disabled:cursor-not-allowed shadow-md hover:shadow-lg active:scale-95"
                  >
                    Proceed to Checkout
                  </button>
                </div>
              </div>
            </>
          )}

          {view === "checkout" && (
            <div className="flex-1 flex items-center justify-center p-4 md:p-6 animate-in slide-in-from-right-8 duration-300 overflow-y-auto">
              <div className="bg-white p-6 md:p-8 rounded-3xl shadow-sm border border-slate-200 w-full max-w-md my-auto">
                <h3 className="font-bold text-2xl text-slate-900 mb-6">Payment Method</h3>
                
                <div className="space-y-3 mb-8">
                  <label className="flex items-center gap-3 p-4 rounded-xl border-2 border-[#22c55e] bg-green-50/50 cursor-pointer transition-colors">
                    <input type="radio" name="payment" defaultChecked className="text-[#22c55e] focus:ring-[#22c55e] w-4 h-4" />
                    <span className="font-bold text-slate-900">UPI / GPay</span>
                  </label>
                  <label className="flex items-center gap-3 p-4 rounded-xl border-2 border-slate-100 hover:border-slate-200 cursor-pointer transition-colors">
                    <input type="radio" name="payment" className="text-[#22c55e] focus:ring-[#22c55e] w-4 h-4" />
                    <span className="font-bold text-slate-900">Cash on Delivery</span>
                  </label>
                </div>

                <div className="flex justify-between items-center mb-6 p-5 bg-slate-50 rounded-xl border border-slate-100">
                  <span className="text-slate-600 font-medium">Amount to Pay</span>
                  <span className="font-bold text-3xl text-[#155e2d]">₹{total}</span>
                </div>

                <div className="flex flex-col-reverse sm:flex-row gap-3">
                  <button onClick={() => setView("shop")} className="px-6 py-4 rounded-xl font-bold border-2 border-slate-200 text-slate-600 hover:bg-slate-50 transition-colors w-full sm:w-auto">
                    Back
                  </button>
                  <button onClick={handlePayment} className="flex-1 py-4 rounded-xl font-bold bg-[#155e2d] text-white hover:bg-[#104a23] shadow-md transition-all active:scale-95 w-full">
                    Pay Now
                  </button>
                </div>
              </div>
            </div>
          )}

          {view === "processing" && (
            <div className="flex-1 flex flex-col items-center justify-center p-6 animate-in fade-in duration-300">
              <div className="w-16 h-16 border-4 border-slate-100 border-t-[#155e2d] rounded-full animate-spin mb-6 shadow-sm"></div>
              <h3 className="font-bold text-xl text-slate-900">Processing Payment...</h3>
              <p className="text-slate-500 mt-2 text-sm font-medium">Please do not close this window.</p>
            </div>
          )}

          {view === "tracking" && (
            <div className="flex-1 flex flex-col items-center p-6 bg-slate-100 animate-in zoom-in-95 duration-500 overflow-y-auto">
              <div className="bg-white w-full max-w-lg rounded-3xl p-6 md:p-8 shadow-sm border border-slate-200 mt-auto mb-auto">
                <div className="flex items-center justify-center w-16 h-16 bg-[#22c55e]/10 text-[#22c55e] rounded-full mx-auto mb-4">
                  <CheckIcon />
                </div>
                <h3 className="font-bold text-2xl text-slate-900 text-center mb-2">Order Confirmed</h3>
                <p className="text-slate-500 text-center mb-8">Arriving in 15-20 minutes to your Rani address.</p>
                
                <div className="space-y-6 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-[#22c55e] before:to-slate-200">
                  <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-[#22c55e] text-white shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-sm z-10">
                      <CheckIcon />
                    </div>
                    <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 rounded-xl border border-[#22c55e] bg-green-50/30">
                      <h4 className="font-bold text-slate-900 text-sm">Order Placed</h4>
                      <p className="text-xs text-slate-500 mt-1">We have received your order.</p>
                    </div>
                  </div>
                  <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-[#22c55e] text-white shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-sm z-10">
                      <StoreIcon />
                    </div>
                    <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 rounded-xl border border-[#22c55e] bg-green-50/30">
                      <h4 className="font-bold text-slate-900 text-sm">Packing</h4>
                      <p className="text-xs text-slate-500 mt-1">Vendor is packing your items.</p>
                    </div>
                  </div>
                  <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-slate-200 text-slate-400 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-sm z-10">
                      <TruckIcon />
                    </div>
                    <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 rounded-xl border border-slate-100 bg-white opacity-60">
                      <h4 className="font-bold text-slate-900 text-sm">Out for Delivery</h4>
                      <p className="text-xs text-slate-500 mt-1">Waiting for driver assignment.</p>
                    </div>
                  </div>
                </div>

                <button onClick={() => setView("shop")} className="w-full mt-8 py-4 rounded-xl font-bold border-2 border-slate-200 text-slate-600 hover:bg-slate-50 transition-colors active:scale-95">
                  Back to Shop
                </button>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}

// --- Main App ---
export default function App() {
  const LAUNCH_DATE = new Date(Date.now() + 5 * 24 * 60 * 60 * 1000);
  const { days, hours, minutes, seconds } = useCountdown(LAUNCH_DATE);

  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [submitted, setSubmit] = useState(false);
  const [menuOpen, setMenu] = useState(false);
  const [loading, setLoading] = useState(true);
  
  // State to manage the prototype modal visibility
  const [showDemo, setShowDemo] = useState(false);

  // State and ref for the mobile scroll animation line
  const stepsContainerRef = useRef(null);
  const [stepScrollProgress, setStepScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!stepsContainerRef.current) return;
      const rect = stepsContainerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Calculate scroll progress percentage based on element position
      const elementTop = rect.top;
      const elementHeight = rect.height;
      const viewportMiddle = windowHeight / 2;
      
      let percent = ((viewportMiddle - elementTop) / elementHeight) * 100;
      setStepScrollProgress(Math.max(0, Math.min(100, percent)));
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNotify = () => {
    if (!email && !phone) return;
    setSubmit(true);
  };

  const scrollToSection = (e, id) => {
    e.preventDefault();
    setMenu(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <>
      {loading && <Preloader onComplete={() => setLoading(false)} />}
      
      {/* Render Prototype Modal if open */}
      {showDemo && <PrototypeModal onClose={() => setShowDemo(false)} />}
      
      <div className={`min-h-screen bg-white font-sans text-slate-900 overflow-x-hidden selection:bg-[#22c55e]/20 selection:text-[#155e2d] transition-opacity duration-700 ${loading ? "opacity-0 h-screen overflow-hidden" : "opacity-100"}`}>
        
        {/* ── NAV ── */}
        <nav className="fixed top-0 inset-x-0 z-50 bg-white/80 backdrop-blur-xl border-b border-slate-100 transition-all duration-300">
          <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
            
            <div 
              className="flex items-center gap-3 cursor-pointer group"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
            >
              <div className="overflow-hidden rounded-full drop-shadow-sm w-10 h-10">
                <img 
                  src="/image.png" 
                  alt="G-Fresh Mart Logo" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="hidden sm:block font-bold text-lg tracking-tight text-[#155e2d] transition-colors duration-300 group-hover:text-[#22c55e]">
                G-Fresh Aashapura
              </div>
            </div>

            <div className="hidden md:flex items-center gap-8">
              {["Features", "How it Works", "For Vendors"].map((l) => (
                <a
                  key={l}
                  href={`#${l.replace(/\s+/g, '').toLowerCase()}`}
                  onClick={(e) => scrollToSection(e, l.replace(/\s+/g, '').toLowerCase())}
                  className="text-sm font-semibold text-slate-600 hover:text-[#155e2d] transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-[#155e2d] after:transition-transform after:duration-300 hover:after:origin-bottom-left hover:after:scale-x-100"
                >
                  {l}
                </a>
              ))}
            </div>

            <div className="hidden md:flex items-center gap-4">
              <button
                onClick={() => setShowDemo(true)}
                className="text-sm font-bold text-[#155e2d] hover:text-[#22c55e] transition-colors"
              >
                Try Prototype
              </button>
              <a
                href="#notify"
                onClick={(e) => scrollToSection(e, 'notify')}
                className="inline-flex items-center text-sm font-semibold px-6 py-2.5 rounded-full bg-[#155e2d] text-white overflow-hidden relative group"
              >
                <span className="relative z-10 transition-transform duration-300 group-hover:-translate-y-10">
                  Get Notified
                </span>
                <span className="absolute inset-0 z-10 flex items-center justify-center transition-transform duration-300 translate-y-10 group-hover:translate-y-0">
                  Get Notified
                </span>
                <div className="absolute inset-0 bg-[#104a23] transition-transform duration-300 scale-x-0 origin-left group-hover:scale-x-100"></div>
              </a>
            </div>

            <button
              className="md:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5 z-50 relative"
              onClick={() => setMenu(!menuOpen)}
            >
              {[0, 1, 2].map((i) => (
                <span 
                  key={i} 
                  className={`block h-0.5 bg-slate-800 rounded-full transition-all duration-300 ease-out ${menuOpen && i === 1 ? 'w-0 opacity-0' : 'w-6 opacity-100'}`} 
                  style={{ 
                    transform: menuOpen ? (i === 0 ? 'translateY(8px) rotate(45deg)' : i === 2 ? 'translateY(-8px) rotate(-45deg)' : 'none') : 'none'
                  }} 
                />
              ))}
            </button>
          </div>
        </nav>

        <div
          className={`fixed inset-0 z-40 bg-white/95 backdrop-blur-md pt-32 px-8 flex flex-col gap-6 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] md:hidden ${menuOpen ? 'opacity-100 visible pointer-events-auto' : 'opacity-0 invisible pointer-events-none'}`}
        >
          {["Features", "How it Works", "For Vendors", "Contact"].map((l, index) => (
            <a
              key={l}
              href={`#${l.replace(/\s+/g, '').toLowerCase()}`}
              className="font-bold text-3xl text-slate-900 border-b border-slate-100 pb-4 transition-all duration-500 transform"
              style={{
                opacity: menuOpen ? 1 : 0,
                transform: menuOpen ? 'translateY(0)' : 'translateY(20px)',
                transitionDelay: `${index * 75}ms`
              }}
              onClick={(e) => scrollToSection(e, l.replace(/\s+/g, '').toLowerCase())}
            >
              {l}
            </a>
          ))}
          <button
            onClick={() => { setMenu(false); setShowDemo(true); }}
            className="mt-4 text-center text-lg font-bold px-8 py-4 rounded-xl bg-slate-100 text-[#155e2d] transition-all duration-500 transform hover:bg-slate-200 active:scale-95"
            style={{
              opacity: menuOpen ? 1 : 0,
              transform: menuOpen ? 'translateY(0)' : 'translateY(20px)',
              transitionDelay: '300ms'
            }}
          >
            Try Prototype
          </button>
          <a
            href="#notify"
            className="mt-2 text-center text-lg font-bold px-8 py-4 rounded-xl bg-[#155e2d] text-white transition-all duration-500 transform hover:bg-[#104a23] active:scale-95"
            style={{
              opacity: menuOpen ? 1 : 0,
              transform: menuOpen ? 'translateY(0)' : 'translateY(20px)',
              transitionDelay: '375ms'
            }}
            onClick={(e) => scrollToSection(e, 'notify')}
          >
            Notify Me at Launch
          </a>
        </div>

        {/* ════════════════════════
            HERO
        ════════════════════════ */}
        <section className="relative pt-40 pb-24 px-6 max-w-5xl mx-auto flex flex-col items-center text-center overflow-hidden">
          
          {/* Ambient Glowing Background */}
          <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[120%] md:w-[800px] h-[500px] bg-gradient-to-tr from-[#22c55e]/20 via-[#155e2d]/5 to-transparent blur-[80px] rounded-[100%] -z-10 pointer-events-none" />

          <Reveal delay="delay-100">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold tracking-wider mb-8 bg-[#22c55e]/10 text-[#155e2d] border border-[#22c55e]/20 uppercase hover:bg-[#22c55e]/20 transition-colors duration-300 cursor-default">
              <span className="w-2 h-2 rounded-full bg-[#22c55e] animate-pulse" />
              Rani's First Digital Mall • Coming Soon
            </div>
          </Reveal>

          <Reveal delay="delay-200">
            <h1 className="font-extrabold text-slate-900 tracking-tight mb-6 text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight">
              Your Favorite Mall, <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#155e2d] to-[#22c55e]">
                Now Delivering Home.
              </span>
            </h1>
          </Reveal>

          <Reveal delay="delay-300">
            <p className="text-lg md:text-xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed">
              Shop from all Aashapura Mall vendors in one place. Fresh groceries, fashion, and daily essentials delivered directly to your doorstep in Rani.
            </p>
          </Reveal>

          <Reveal delay="delay-400">
            <div className="flex flex-wrap justify-center gap-3 mb-14">
              {['🍎 Fresh Produce', '🍞 Bakery Items', '⚡ 20-Min Delivery', '🛒 50+ Vendors'].map(tag => (
                <span key={tag} className="px-4 py-2 bg-white/80 backdrop-blur-sm border border-slate-200 shadow-sm rounded-full text-sm font-bold text-slate-600">
                  {tag}
                </span>
              ))}
            </div>
          </Reveal>

          <Reveal delay="delay-500">
            <div className="flex items-center justify-center gap-3 md:gap-5 mb-14">
              <DigitBox value={days} label="Days" />
              <span className="text-2xl font-bold text-slate-300 -mt-6 animate-pulse">:</span>
              <DigitBox value={hours} label="Hours" />
              <span className="text-2xl font-bold text-slate-300 -mt-6 animate-pulse">:</span>
              <DigitBox value={minutes} label="Minutes" />
              <span className="text-2xl font-bold text-slate-300 -mt-6 animate-pulse">:</span>
              <DigitBox value={seconds} label="Seconds" />
            </div>
          </Reveal>

          <Reveal delay="delay-600" className="w-full sm:w-auto">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full">
              <a 
                href="#notify" 
                onClick={(e) => scrollToSection(e, 'notify')}
                className="w-full sm:w-auto px-8 py-4 rounded-xl font-bold text-base bg-[#155e2d] text-white hover:bg-[#104a23] hover:shadow-xl hover:shadow-[#155e2d]/20 transition-all duration-300 hover:-translate-y-1 active:scale-95"
              >
                Notify Me on Launch
              </a>
              <button 
                onClick={() => setShowDemo(true)}
                className="w-full sm:w-auto px-8 py-4 rounded-xl font-bold text-base bg-white text-[#155e2d] border-2 border-slate-200 hover:border-[#155e2d] hover:bg-slate-50 transition-all duration-300 active:scale-95"
              >
                View Live Prototype
              </button>
            </div>
          </Reveal>
        </section>

        {/* ════════════════════════
            FEATURES
        ════════════════════════ */}
        <section id="features" className="py-24 px-6 bg-slate-50 border-y border-slate-100">
          <div className="max-w-6xl mx-auto">
            <Reveal>
              <div className="text-center mb-16">
                <h2 className="font-bold text-3xl md:text-4xl text-slate-900 mb-4 tracking-tight">
                  Everything in one place
                </h2>
                <p className="text-slate-600 max-w-xl mx-auto text-lg">
                  We are bringing the entire Aashapura Mall experience to your smartphone. Clean, fast, and incredibly simple to use.
                </p>
              </div>
            </Reveal>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <FeatureCard
                icon={<ShoppingBagIcon />}
                title="Unified Shopping"
                desc="Browse all mall vendors from a single app. No need to switch between stores or stand in long queues."
                delay=""
              />
              <FeatureCard
                icon={<TruckIcon />}
                title="Express Delivery"
                desc="Fast and reliable doorstep delivery across Rani city. Get your essentials without leaving your home."
                delay="delay-100"
              />
              <FeatureCard
                icon={<CreditCardIcon />}
                title="Secure Checkout"
                desc="Multiple payment options including UPI, Cards, and Cash on Delivery. 100% safe and secure transactions."
                delay="delay-200"
              />
            </div>
          </div>
        </section>

        {/* ════════════════════════
            HOW IT WORKS
        ════════════════════════ */}
        <section id="howitworks" className="py-24 px-6 max-w-5xl mx-auto overflow-hidden">
          <Reveal>
            <div className="text-center mb-20">
              <h2 className="font-bold text-3xl md:text-4xl text-slate-900 tracking-tight">
                How it works
              </h2>
            </div>
          </Reveal>

          <div ref={stepsContainerRef} className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
            
            {/* Desktop Horizontal Line */}
            <div className="hidden md:block absolute top-[3rem] left-[16%] right-[16%] h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent z-0" />

            {/* Mobile Vertical Animated Line */}
            <div className="md:hidden absolute top-[3rem] bottom-[3rem] left-1/2 -translate-x-1/2 w-1 bg-slate-100 z-0 rounded-full overflow-hidden">
              <div 
                className="w-full bg-[#22c55e] transition-all duration-100 ease-linear" 
                style={{ height: `${stepScrollProgress}%` }} 
              />
            </div>

            {[
              { step: "01", title: "Sign Up Free", desc: "Create your free account on our platform in less than a minute." },
              { step: "02", title: "Add to Cart", desc: "Explore products from your favorite local vendors and add them to your cart." },
              { step: "03", title: "Fast Delivery", desc: "Checkout securely and relax while we bring your order to your door." },
            ].map(({ step, title, desc }, i) => (
              <Reveal key={step} delay={`delay-${i * 100}`}>
                <div className="relative z-10 flex flex-col items-center text-center group cursor-default">
                  <div className={`w-24 h-24 rounded-full bg-white border-2 flex items-center justify-center text-2xl font-black mb-6 transition-all duration-500 shadow-sm z-10 
                    ${stepScrollProgress > (i * 40) ? 'border-[#22c55e] text-[#22c55e] scale-110 shadow-xl shadow-[#22c55e]/20' : 'border-slate-100 text-slate-300'} 
                    group-hover:border-[#22c55e] group-hover:text-[#22c55e] group-hover:scale-110 group-hover:shadow-xl group-hover:shadow-[#22c55e]/20`}>
                    {step}
                  </div>
                  <h3 className="font-bold text-xl text-slate-900 mb-3 transition-colors duration-300 group-hover:text-[#155e2d]">{title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed max-w-xs">{desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* ════════════════════════
            FOR VENDORS
        ════════════════════════ */}
        <section id="forvendors" className="py-24 px-6 bg-[#155e2d] text-white">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <Reveal>
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold tracking-wider mb-6 bg-white/10 border border-white/20 uppercase">
                  <StoreIcon /> For Mall Vendors
                </div>
                <h2 className="font-bold text-3xl md:text-5xl mb-6 tracking-tight leading-tight">
                  Take your business online with zero hassle.
                </h2>
                <p className="text-green-100 mb-8 text-lg leading-relaxed">
                  G-Fresh gives Aashapura Mall shop owners a dedicated platform to reach every home in Rani. We handle the app, the marketing, and the delivery network. You focus on what you do best—selling great products.
                </p>
                <ul className="space-y-4 mb-8">
                  {['Dedicated seller dashboard', 'Real-time inventory management', 'Automated delivery dispatch', 'Clear payout reports'].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-green-50 font-medium">
                      <div className="w-6 h-6 rounded-full bg-[#22c55e] flex items-center justify-center shrink-0">
                        <CheckIcon />
                      </div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
            <Reveal delay="delay-200">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-tr from-[#22c55e]/40 to-transparent blur-3xl rounded-full"></div>
                <div className="bg-white p-8 rounded-[2.5rem] text-slate-900 shadow-2xl relative">
                  <h3 className="font-bold text-2xl mb-4 text-center">Partner With Us</h3>
                  <p className="text-slate-500 text-center mb-8">Join the digital revolution in Rani.</p>
                  <form onSubmit={(e) => { e.preventDefault(); alert("Vendor inquiry sent!"); }} className="space-y-4">
                    <input type="text" placeholder="Shop Name" className="w-full px-6 py-4 rounded-xl bg-slate-50 border border-slate-200 focus:border-[#22c55e] focus:outline-none" required />
                    <input type="tel" placeholder="Contact Number" className="w-full px-6 py-4 rounded-xl bg-slate-50 border border-slate-200 focus:border-[#22c55e] focus:outline-none" required />
                    <button type="submit" className="w-full bg-[#155e2d] hover:bg-[#104a23] text-white font-bold py-4 rounded-xl transition-colors mt-2 shadow-lg active:scale-95">
                      Request Callback
                    </button>
                  </form>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ════════════════════════
            TESTIMONIALS
        ════════════════════════ */}
        <section className="py-24 px-6 bg-slate-50">
          <div className="max-w-6xl mx-auto">
            <Reveal>
              <div className="text-center mb-16">
                <h2 className="font-bold text-3xl md:text-4xl text-slate-900 tracking-tight">
                  What locals are saying
                </h2>
              </div>
            </Reveal>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { name: "Rahul S.", text: "Finally an app that brings Aashapura Mall directly to my house. The delivery prototype looks incredibly smooth." },
                { name: "Priya M.", text: "I love that I can buy groceries and bakery items in one single order. Very excited for the launch!" },
                { name: "Vikram R.", text: "This is exactly what Rani needed. A professional service for local businesses. Highly recommend." }
              ].map((review, i) => (
                <Reveal key={i} delay={`delay-${i * 100}`}>
                  <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm h-full">
                    <div className="flex text-[#22c55e] mb-4">
                      <StarIcon /><StarIcon /><StarIcon /><StarIcon /><StarIcon />
                    </div>
                    <p className="text-slate-600 mb-6 italic">"{review.text}"</p>
                    <p className="font-bold text-slate-900">{review.name}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ════════════════════════
            NOTIFY SECTION
        ════════════════════════ */}
        <section id="notify" className="py-24 px-6">
          <Reveal>
            <div className="max-w-4xl mx-auto text-center bg-[#0f172a] rounded-[2.5rem] p-10 md:p-20 text-white shadow-2xl relative overflow-hidden group">
              
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-[#155e2d] opacity-20 blur-[100px] rounded-full pointer-events-none transition-transform duration-1000 group-hover:scale-125" />

              <div className="relative z-10">
                {!submitted ? (
                  <div className="animate-in fade-in zoom-in duration-500">
                    <h2 className="font-bold text-3xl md:text-5xl mb-6 tracking-tight">
                      Be the first to know.
                    </h2>
                    <p className="text-slate-400 mb-12 max-w-xl mx-auto text-lg">
                      Join our waitlist to get notified the moment we launch. Early members get exclusive VIP discounts on their first order.
                    </p>

                    <div className="flex flex-col gap-4 max-w-sm mx-auto">
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Email Address"
                        className="w-full px-6 py-4 rounded-xl text-slate-900 bg-slate-50 border border-transparent focus:outline-none focus:border-[#22c55e] focus:ring-4 focus:ring-[#22c55e]/20 transition-all duration-300 placeholder:text-slate-400 hover:bg-white"
                      />
                      <input
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="WhatsApp Number"
                        className="w-full px-6 py-4 rounded-xl text-slate-900 bg-slate-50 border border-transparent focus:outline-none focus:border-[#22c55e] focus:ring-4 focus:ring-[#22c55e]/20 transition-all duration-300 placeholder:text-slate-400 hover:bg-white"
                      />
                      <button
                        onClick={handleNotify}
                        className="w-full bg-[#22c55e] hover:bg-[#1dae50] text-slate-900 font-bold py-4 rounded-xl transition-all duration-300 mt-2 shadow-lg shadow-[#22c55e]/20 hover:-translate-y-1 active:scale-95"
                      >
                        Join Waitlist
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="py-12 animate-in slide-in-from-bottom-8 fade-in duration-500">
                    <div className="w-20 h-20 bg-[#22c55e]/20 text-[#22c55e] rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckIcon />
                    </div>
                    <h3 className="font-bold text-3xl md:text-4xl mb-4">You're on the list!</h3>
                    <p className="text-slate-400 text-lg max-w-md mx-auto">
                      Thank you for registering. We will notify you as soon as G-Fresh Mart goes live in Rani.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </Reveal>
        </section>

        {/* ════════════════════════
            FOOTER
        ════════════════════════ */}
        <footer id="contact" className="py-12 px-6 border-t border-slate-100 bg-white">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
            
            <div className="flex items-center gap-4 cursor-pointer group" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
              <div className="overflow-hidden rounded-full w-12 h-12">
                <img 
                  src="/image.png" 
                  alt="G-Fresh Mart" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div>
                <div className="font-bold text-lg text-slate-900 tracking-tight transition-colors group-hover:text-[#155e2d]">G-Fresh Mart</div>
                <div className="text-xs text-slate-500 font-medium">Aashapura Mall, Rani (306115)</div>
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-8 text-sm font-medium text-slate-500">
              <a href="mailto:info@gfresh.in" className="hover:text-[#155e2d] transition-colors duration-300">info@gfresh.in</a>
              <a href="#" className="hover:text-[#155e2d] transition-colors duration-300">Privacy Policy</a>
              <a href="#" className="hover:text-[#155e2d] transition-colors duration-300">Terms of Service</a>
            </div>
            
            <div className="text-sm text-slate-400">
              © {new Date().getFullYear()} G-Fresh. All rights reserved.
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}