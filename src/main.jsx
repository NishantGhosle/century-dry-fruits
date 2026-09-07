import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { createRoot } from "react-dom/client";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  NavLink,
  useParams,
  useLocation,
} from "react-router-dom";
import {
  ShoppingBag,
  Menu,
  X,
  Plus,
  Minus,
  Trash2,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  MapPin,
  Phone,
  Mail,
  Clock,
  Star,
  Check,
} from "lucide-react";
import "./styles.css";
import Image_01_front from "../assets/images/Image_01_front.png";
import Image_02_front from "../assets/images/Image_02_front.png";
import Image_03_front from "../assets/images/Image_03_front.png";
import Image_04_front from "../assets/images/Image_04_front.png";
import Image_05_front from "../assets/images/Image_05_front.png";
import Image_06_front from "../assets/images/Image_06_front.png";
import Image_07_front from "../assets/images/Image_07_front.png";
import Image_08_front from "../assets/images/Image_08_front.png";

import Image_01_back from "../assets/images/Image_01_back.png";
import Image_02_back from "../assets/images/Image_02_back.png";
import Image_03_back from "../assets/images/Image_03_back.png";
import Image_04_back from "../assets/images/Image_04_back.png";
import Image_05_back from "../assets/images/Image_05_back.png";
import Image_06_back from "../assets/images/Image_06_back.png";
import Image_07_back from "../assets/images/Image_07_back.png";
import Image_08_back from "../assets/images/Image_08_back.png";

const products = [
  {
    id: "1",
    slug: "makhana-fox-nuts",
    name: "Makhana Fox Nuts",
    short: "Makhana Fox Nuts",
    brand: "Makhana",
    weight: "100g",
    accent: "#159ca5",
    bg: "#e0f3f4",
    note: "Light, crunchy & naturally delicious",
    tagline: "Light, crunchy and mildly nutty",
    description:
      "Makhana, also known as Fox Nuts, is a light and delicious snack packed with nutrients. Roasted to perfection, it offers a crunchy texture and a mildly nutty taste. Enjoy it as a snack or add it to kheer, curries and salads.",
    features: [
      "100% Natural",
      "Roasted Not Fried",
      "Rich in Protein",
      "Light & Crunchy",
    ],
    image: Image_01_front,
    backImage: Image_01_back,
  },

  {
    id: "2",
    slug: "mother-made-makhana",
    name: "Mother Made Makhana",
    short: "Mother Made",
    brand: "Mother Made",
    weight: "200g",
    accent: "#159ca5",
    bg: "#e0f3f4",
    note: "100% natural & wholesome",
    tagline: "100% Natural Makhana",
    description:
      "Mother Made Makhana is a wholesome fox nut snack made for light and satisfying everyday snacking. Enjoy the crunchy makhana as a convenient snack whenever you want something naturally delicious.",
    features: [
      "100% Natural",
      "Rich in Protein",
      "Light & Crunchy",
      "Wholesome Snack",
    ],
    image: Image_02_front,
    backImage: Image_02_back,
  },

  {
    id: "3",
    slug: "century-nutri-pops-makhana",
    name: "Century Nutri Pop's Makhana",
    short: "Nutri Pop's",
    brand: "Century",
    weight: "100g",
    accent: "#222222",
    bg: "#eeeeee",
    note: "Premium quality & roasted",
    tagline: "Premium Quality Makhana",
    description:
      "Century Nutri Pop's Makhana is a premium-quality fox nut snack with a light and crunchy texture. It is roasted rather than fried and makes a convenient snack for enjoying anytime, anywhere.",
    features: [
      "Premium Quality",
      "Rich in Protein",
      "Gluten Free",
      "Roasted Not Fried",
    ],
    image: Image_03_front,
    backImage: Image_03_back,
  },

  {
    id: "4",
    slug: "madhuban-makhana",
    name: "Madhuban Makhana",
    short: "Madhuban",
    brand: "Madhuban",
    weight: "200g",
    accent: "#b51f27",
    bg: "#f8e0d5",
    note: "Light, crunchy & delicious",
    tagline: "A light, crunchy and delicious superfood",
    description:
      "Madhuban Makhana is a light, crunchy and delicious fox nut snack. The packaging highlights its natural goodness and rich protein content, making it a simple choice for everyday snacking.",
    features: [
      "100% Natural",
      "Rich in Protein",
      "Gluten Free",
      "Roasted Not Fried",
    ],
    image: Image_04_front,
    backImage: Image_04_back,
  },

  {
    id: "5",
    slug: "maruti-makhana",
    name: "Maruti Makhana",
    short: "Maruti",
    brand: "Maruti",
    weight: "200g",
    accent: "#7d1522",
    bg: "#f1ddd4",
    note: "Light, crunchy & gluten free",
    tagline: "Light, Crunchy & Gluten Free Snack",
    description:
      "Maruti Makhana is a light and crunchy fox nut snack made for everyday enjoyment. The packaging highlights its natural ingredients, gluten-free qualities and roasted-not-fried preparation.",
    features: [
      "100% Natural",
      "Gluten Free",
      "High in Protein",
      "Roasted Not Fried",
    ],
    image: Image_05_front,
    backImage: Image_05_back,
  },

  {
    id: "6",
    slug: "century-nutri-pure-makhana",
    name: "Century Nutri Pure Makhana",
    short: "Nutri Pure",
    brand: "Century",
    weight: "250g",
    accent: "#c9911b",
    bg: "#f7ead0",
    note: "Low fat & protein rich",
    tagline: "Low Fat Makhana",
    description:
      "Century Nutri Pure Makhana is a naturally light fox nut snack positioned as a low-fat, protein-rich and gluten-free choice. It can be enjoyed roasted or used in makhana curries, snacks and as a garnish for biryani or pulao.",
    features: [
      "Low Fat",
      "Rich in Protein",
      "Gluten Free",
      "Roasted Not Fried",
    ],
    image: Image_06_front,
    backImage: Image_06_back,
  },

  {
    id: "7",
    slug: "premium-kaju",
    name: "Premium Kaju",
    short: "Premium Kaju",
    brand: "Kaju",
    weight: "250g",
    accent: "#c58b45",
    bg: "#f7ead8",
    note: "Premium, crunchy & delicious",
    tagline: "Premium Quality Cashews",
    description:
      "Premium Kaju, also known as Cashews, are rich, creamy and naturally delicious. Carefully selected for their quality and crunch, they make a wholesome snack and are perfect for sweets, desserts and everyday cooking.",
    features: [
      "Premium Quality",
      "Naturally Delicious",
      "Rich & Creamy",
      "Crunchy & Fresh",
    ],
    image: Image_07_front,
    backImage: Image_07_back,
  },

  {
    id: "8",
    slug: "premium-kismis",
    name: "Premium Kismis",
    short: "Premium Kismis",
    brand: "Kismis",
    weight: "250g",
    accent: "#8b5a3c",
    bg: "#f1e4d8",
    note: "Sweet, juicy & naturally delicious",
    tagline: "Naturally Sweet Raisins",
    description:
      "Premium Kismis, also known as Raisins, are naturally sweet, soft and delicious. Carefully selected and packed to retain their freshness, they are perfect for snacking, desserts, sweets and everyday cooking.",
    features: [
      "Premium Quality",
      "Naturally Sweet",
      "Soft & Juicy",
      "Fresh & Delicious",
    ],
    image: Image_08_front,
    backImage: Image_08_back,
  },
];

function ProductArt({ product, large = false }) {
  return (
    <div className={`product-art ${large ? "large" : ""}`}>
      <div className="product-flip">
        <div className="product-face product-front">
          <img
            src={product.image}
            alt={`${product.name} front`}
            className="product-image"
          />
        </div>

        <div className="product-face product-back">
          <img
            src={product.backImage}
            alt={`${product.name} back`}
            className="product-image"
          />
        </div>
      </div>
    </div>
  );
}
function FlavorCarousel() {
  const [index, setIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(4);

  useEffect(() => {
    const updateVisibleCount = () => {
      if (window.innerWidth <= 600) {
        setVisibleCount(1);
      } else if (window.innerWidth <= 900) {
        setVisibleCount(2);
      } else {
        setVisibleCount(4);
      }
    };

    updateVisibleCount();
    window.addEventListener("resize", updateVisibleCount);

    return () => window.removeEventListener("resize", updateVisibleCount);
  }, []);

  useEffect(() => {
    const maxIndex = Math.max(0, products.length - visibleCount);

    setIndex((prev) => Math.min(prev, maxIndex));
  }, [visibleCount]);

  const maxIndex = Math.max(0, products.length - visibleCount);

  const next = () => {
    setIndex((prev) => Math.min(prev + 1, maxIndex));
  };

  const previous = () => {
    setIndex((prev) => Math.max(prev - 1, 0));
  };

  return (
    <div className="flavor-carousel">
      <style>{`
        .flavor-carousel {
          position: relative;
          width: 100%;
          min-width: 0;
        }

        .flavor-carousel-window {
          width: 100%;
          overflow: hidden;
        }

        .flavor-carousel-track {
          display: flex;
          gap: 24px;
          width: 100%;
          transition: transform 0.45s ease;
          will-change: transform;
        }

        .flavor-carousel-track .flavor-card {
          flex: 0 0 calc((100% - 72px) / 4);
          min-width: 0;
          max-width: calc((100% - 72px) / 4);
        }

        .flavor-carousel-controls {
          display: flex;
          justify-content: flex-end;
          align-items: center;
          gap: 10px;
          margin-bottom: 18px;
        }

        .flavor-carousel-btn {
          width: 42px;
          height: 42px;
          padding: 0;
          flex-shrink: 0;
          border: 1px solid rgba(110, 82, 53, 0.2);
          background: #fff;
          color: #6E5235;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition:
            background 0.2s ease,
            color 0.2s ease,
            opacity 0.2s ease;
        }

        .flavor-carousel-btn:hover:not(:disabled) {
          background: #6E5235;
          color: #fff;
        }

        .flavor-carousel-btn:disabled {
          opacity: 0.35;
          cursor: not-allowed;
        }

        .flavor-carousel-track .flavor-card > div {
          min-width: 0;
        }

        .flavor-carousel-track .flavor-card h4 {
          overflow-wrap: anywhere;
        }

        /* ---------- TABLET ---------- */

        @media (max-width: 900px) {
          .flavor-carousel-track {
            gap: 24px;
          }

          .flavor-carousel-track .flavor-card {
            flex: 0 0 calc((100% - 24px) / 2);
            max-width: calc((100% - 24px) / 2);
          }
        }

        /* ---------- MOBILE ---------- */

       @media (max-width: 600px) {
  .flavor-carousel {
    width: 100%;
    min-width: 0;
  }

  .flavor-carousel-window {
    width: 100%;
    overflow: hidden;
  }

  .flavor-carousel-controls {
    margin-bottom: 14px;
    gap: 8px;
  }

  .flavor-carousel-btn {
    width: 40px;
    height: 40px;
  }

  .flavor-carousel-track {
    width: 100%;
    gap: 0;
  }

  .flavor-carousel-track .flavor-card {
    flex: 0 0 100%;
    width: 100%;
    min-width: 100%;
    max-width: 100%;
    box-sizing: border-box;
  }

  .flavor-carousel-track .flavor-card h4 {
    font-size: 18px;
  }
}
        /* ---------- SMALL MOBILE ---------- */

        @media (max-width: 380px) {
          .flavor-carousel-controls {
            margin-bottom: 12px;
          }

          .flavor-carousel-btn {
            width: 38px;
            height: 38px;
          }

          .flavor-carousel-track {
            gap: 0;
          }

          .flavor-carousel-track .flavor-card {
              flex: 0 0 100%;
              width: 100%;
              min-width: 100%;
              max-width: 100%;
          }

          .flavor-carousel-track .flavor-card h4 {
            font-size: 16px;
          }
        }
      `}</style>

      <div className="flavor-carousel-controls">
        <button
          type="button"
          className="flavor-carousel-btn"
          onClick={previous}
          disabled={index === 0}
          aria-label="Previous flavors"
        >
          <ChevronLeft size={20} />
        </button>

        <button
          type="button"
          className="flavor-carousel-btn"
          onClick={next}
          disabled={index === maxIndex}
          aria-label="Next flavors"
        >
          <ChevronRight size={20} />
        </button>
      </div>

      <div className="flavor-carousel-window">
        <div
          className="flavor-carousel-track"
          style={{
            transform:
              visibleCount === 1
                ? `translateX(-${index * 100}%)`
                : `translateX(calc(-${index} * (100% / ${visibleCount} + 24px)))`,
          }}
        >
          {products.map((p) => (
            <Link
              className="flavor-card"
              to={`/product-detail/${p.slug}`}
              key={p.id}
            >
              <ProductArt product={p} />

              <div>
                <span>{p.note}</span>
                <h4>{p.name}</h4>
              </div>

              <ArrowRight size={20} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
const CartContext = createContext(null);
function CartProvider({ children }) {
  const [items, setItems] = useState(() =>
    JSON.parse(localStorage.getItem("qasmi-cart") || "[]"),
  );
  const [open, setOpen] = useState(false);
  useEffect(
    () => localStorage.setItem("qasmi-cart", JSON.stringify(items)),
    [items],
  );
  const add = (product, quantity = 1) => {
    setItems((prev) => {
      const existing = prev.find((item) => item.id === product.id);

      if (existing) {
        return prev.map((item) =>
          item.id === product.id
            ? {
                ...item,
                qty: item.qty + quantity,
              }
            : item,
        );
      }

      return [
        ...prev,
        {
          ...product,
          qty: quantity,
        },
      ];
    });

    setOpen(true);
  };
  const change = (id, delta) =>
    setItems((prev) =>
      prev.map((x) =>
        x.id === id ? { ...x, qty: Math.max(1, x.qty + delta) } : x,
      ),
    );
  const remove = (id) => setItems((prev) => prev.filter((x) => x.id !== id));
  const count = items.reduce((s, x) => s + x.qty, 0);
  const value = useMemo(
    () => ({ items, open, setOpen, add, change, remove, count }),
    [items, open, count],
  );
  return (
    <CartContext.Provider value={value}>
      {children}

      <FloatingContactButtons hidden={open} />

      <CartDrawer />
    </CartContext.Provider>
  );
}
const useCart = () => useContext(CartContext);

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [pathname]);

  return null;
}

function Header() {
  const { count, setOpen } = useCart();
  const [mobile, setMobile] = useState(false);
  return (
    <header className="header">
      <div className="container nav">
        <Link to="/" className="brand">
          <span>
            Century
            <br />
            <small>Dry Fruits</small>
          </span>
        </Link>
        <nav className={mobile ? "mobile-nav" : "desktop-nav"}>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/products">Products</NavLink>
          <NavLink to="/about">About Us</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </nav>
        <div className="nav-actions">
          <button
            className="cart-button"
            onClick={() => setOpen(true)}
            aria-label="Cart"
          >
            <ShoppingBag size={20} />
            <b>{count}</b>
          </button>
          <button className="mobile-menu" onClick={() => setMobile(!mobile)}>
            {mobile ? <X /> : <Menu />}
          </button>
        </div>
      </div>
    </header>
  );
}

function CartDrawer() {
  const { items, open, setOpen, change, remove } = useCart();

  const handleCheckout = () => {
    const phoneNumber = "919993763040";

    const productDetails = items
      .map((item, index) => `${index + 1}. ${item.name} - Qty: ${item.qty}`)
      .join("\n");

    const message = `Hello Century Dry Fruits,

I would like to place an order:

${productDetails}

Please confirm the availability and total price.

Thank you.`;

    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message,
    )}`;

    window.open(whatsappUrl, "_blank");
  };

  return (
    <>
      {open && <div className="backdrop" onClick={() => setOpen(false)} />}

      <aside className={`cart-drawer ${open ? "show" : ""}`}>
        <div className="drawer-head">
          <div>
            <span className="eyebrow">YOUR BAG</span>
            <h3>Shopping Cart</h3>
          </div>

          <button onClick={() => setOpen(false)}>
            <X />
          </button>
        </div>

        <div className="drawer-items">
          {!items.length ? (
            <div className="empty-cart">
              <ShoppingBag size={42} />
              <h4>Your cart is empty</h4>
              <p>Add a Talbeena flavor to get started.</p>

            <Link to="/products">
              <button
                className="dark-btn"
                onClick={() => setOpen(false)}
              >
                Continue Shopping
              </button>
            </Link>
            </div>
          ) : (
            items.map((item) => (
              <div className="cart-row" key={item.id}>
                <ProductArt product={item} />

                <div className="cart-info">
                  <h4>{item.name}</h4>

                  <div className="qty">
                    <button onClick={() => change(item.id, -1)}>
                      <Minus size={14} />
                    </button>

                    <span>{item.qty}</span>

                    <button onClick={() => change(item.id, 1)}>
                      <Plus size={14} />
                    </button>
                  </div>
                </div>

                <button className="remove" onClick={() => remove(item.id)}>
                  <Trash2 size={16} />
                </button>
              </div>
            ))
          )}
        </div>

        {items.length > 0 && (
          <div className="drawer-bottom">
            <div className="total-line" />

            <button className="checkout" onClick={handleCheckout}>
              Checkout <ArrowRight size={18} />
            </button>
          </div>
        )}
      </aside>
    </>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="partner">
          <div>
            <span className="eyebrow">PARTNER WITH US</span>
            <h2>
              Bring Premium Makhana
              <br />
              to Your Community.
            </h2>
            <p>
              Partner with us and become a distributor of quality makhana
              products for wholesome, everyday snacking.
            </p>
          </div>

          <a
            className="light-btn"
            href="https://wa.me/919993763040"
            target="_blank"
            rel="noopener noreferrer"
          >
            Apply via WhatsApp <ArrowRight size={17} />
          </a>
        </div>

        <div className="footer-grid">
          <div>
            <Link to="/" className="brand footer-brand">
              <span>
                CENTURY
                <br />
                <small>DRY FRUITS</small>
              </span>
            </Link>

            <p>
              Making wholesome snacking simple, delicious, and accessible.
              Discover premium makhana, crafted for light, crunchy, everyday
              enjoyment.
            </p>
          </div>

          <div>
            <h4>Navigation</h4>
            <Link to="/">Home</Link>
            <Link to="/products">Products</Link>
            <Link to="/about">About Us</Link>
            <Link to="/contact">Contact</Link>
          </div>

          <div>
            <h4>Contact</h4>

            <a href="tel:+919993763040">+919993763040</a>

            <a href="mailto:centurytradersfeedbacks@gmail.com">
              centurytradersfeedbacks@gmail.com
            </a>

            <span>Reni Wali Gali, Mangalwara, Bhopal</span>
          </div>
        </div>

        <div className="copyright">
          <span>© 2026 Century Dry Fruits. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
}

function Home() {
  const { add } = useCart();
  return (
    <>
      <Header />
      <main>
        <section className="hero">
          <div className="hero-orb orb1" />
          <div className="hero-orb orb2" />
          <div className="container hero-grid">
            <div className="hero-copy">
              <span className="eyebrow light">
                MAKHANA · LIGHT · CRUNCHY · DELICIOUS
              </span>
              <h1>
                Purely
                <br />
                <em>Delicious.</em>
              </h1>
              <p>
                Discover premium makhana — light, crunchy, and naturally
                delicious. A wholesome snack crafted for everyday enjoyment.
              </p>
              <div className="hero-actions">
                <a href="#flavors" className="light-btn">
                  Explore Sub Brands <ArrowRight size={17} />
                </a>
                <a href="#products" className="outline-btn">
                  Shop In Store
                </a>
              </div>
            </div>
          </div>
        </section>
        <section className="section about-values">
          <div className="container">
            <div className="section-title centered">
              <h2>
                Our Journey
                <br />
                <em>So Far.</em>
              </h2>
            </div>

            <div className="values-grid">
              <div className="value-card">
                <span>01</span>
                <h3>200+ STORES SERVED</h3>
                <p>
                  Trusted by retail stores across Madhya Pradesh and India for
                  premium-quality Phool Makhana supply.
                </p>
              </div>

              <div className="value-card">
                <span>02</span>
                <h3>1 LAKH+ PACKETS SOLD</h3>
                <p>
                  Delivering fresh, crunchy, and nutritious makhana to thousands
                  of satisfied customers.
                </p>
              </div>

              <div className="value-card">
                <span>03</span>
                <h3>200+ WHOLESALE PARTNERS</h3>
                <p>
                  Preferred wholesale supplier for distributors, traders,
                  retailers, and resellers.
                </p>
              </div>

              <div className="value-card">
                <span>04</span>
                <h3>PREMIUM PHOOL MAKHANA</h3>
                <p>
                  Carefully sourced, quality-checked, and packed to ensure
                  superior taste and freshness.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="flavors section" id="flavors">
          <div className="container">
            <div className="section-title">
              <span className="eyebrow">OUR FLAVORS</span>

              <h2>
                Explore <em>Delicious</em>
                <br />
                Makhana Choices
              </h2>
            </div>

            <FlavorCarousel />
          </div>
        </section>

        <section className="nutrition">
          <div className="container nutrition-grid">
            <div>
              <span className="eyebrow light">NUTRITIONAL VIEW</span>
              <h2>
                Light on the Snack
                <br />
                <em>Big on Goodness.</em>
              </h2>
              <p>
                Makhana is a naturally light and crunchy fox nut enjoyed as a
                wholesome everyday snack. Explore our collection of roasted
                makhana, with options that highlight protein, dietary fiber,
                low-fat nutrition and gluten-free goodness.
              </p>
              <div className="nutrition-list">
                <div>
                  <b>9.7g</b>
                  <span>Protein</span>
                </div>
                <div>
                  <b>4.6g</b>
                  <span>Dietary Fiber</span>
                </div>
                <div>
                  <b>0.1g</b>
                  <span>Total Fat</span>
                </div>
                <div>
                  <b>0mg</b>
                  <span>Cholesterol</span>
                </div>
              </div>
            </div>
            <div className="nutrition-art">
              <ProductArt product={products[1]} large />
            </div>
          </div>
        </section>

        <section className="section products-section" id="products">
          <div className="container">
            <div className="section-title centered">
              <span className="eyebrow">PURE WHOLESOME CHOICES</span>
              <h2>
                Choose Your <em>Flavor</em>
              </h2>
              <p className="flavour-paragraph">
                Discover our range of premium makhana — light, crunchy,
                naturally delicious, and perfect for wholesome everyday
                snacking.
              </p>
            </div>
            <ProductGrid onAdd={add} />
          </div>
        </section>
        <section className="section keywords-section">
          <div className="container">
            <div className="section-title centered">
              <span className="eyebrow">SERVING BHOPAL & BEYOND</span>
              <h2>
                Wholesale, Bulk & Distribution
                <br />
                <em>Makhana Supply</em>
              </h2>
            </div>
            <div className="values-grid">
              <div className="value-card">
                <h3>Wholesale Makhana in Bhopal</h3>
                <p>
                  We are one of the leading suppliers of wholesale makhana in
                  Bhopal, serving retailers, supermarkets, and distributors with
                  premium-quality fox nuts.
                </p>
              </div>
              <div className="value-card">
                <h3>Fox Nuts Wholesale Supplier</h3>
                <p>
                  Our fox nuts are sourced from trusted producers and supplied
                  in bulk quantities for commercial and retail requirements.
                </p>
              </div>
              <div className="value-card">
                <h3>Phool Makhana Distributor</h3>
                <p>
                  We provide high-quality Phool Makhana for wholesalers,
                  resellers, dry fruit stores, and food businesses across India.
                </p>
              </div>
              <div className="value-card">
                <h3>Bulk Makhana Supplier</h3>
                <p>
                  Looking for bulk makhana at competitive prices? We offer
                  reliable supply, quality assurance, and prompt delivery.
                </p>
              </div>
            </div>
          </div>
        </section>
        <Benefits />
        <Testimonials />
        <section className="section why-choose-us">
          <div className="container">
            <div className="section-title centered">
              <span className="eyebrow">WHY CHOOSE US</span>
              <h2>
                Trusted <em>Wholesale Makhana</em>
                <br />
                Partner in Bhopal
              </h2>
            </div>
            <div className="values-grid">
              <div className="value-card">
                <span>01</span>
                <h3>Premium Quality Makhana</h3>
                <p>
                  We supply handpicked Phool Makhana with excellent size,
                  texture, and taste.
                </p>
              </div>
              <div className="value-card">
                <span>02</span>
                <h3>Competitive Wholesale Pricing</h3>
                <p>
                  Get the best rates for bulk orders without compromising on
                  quality.
                </p>
              </div>
              <div className="value-card">
                <span>03</span>
                <h3>Reliable Supply & Bulk Order Support</h3>
                <p>
                  Consistent inventory, timely delivery, and customized bulk
                  order solutions for wholesalers, distributors, and retailers.
                </p>
              </div>
              <div className="value-card">
                <span>04</span>
                <h3>Hygienic Packaging</h3>
                <p>
                  Freshness-preserving packaging for longer shelf life and
                  superior quality.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

function ProductGrid({ onAdd }) {
  const [index, setIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(4);

  useEffect(() => {
    const updateVisibleCount = () => {
      if (window.innerWidth <= 600) {
        setVisibleCount(1);
      } else if (window.innerWidth <= 900) {
        setVisibleCount(2);
      } else {
        setVisibleCount(4);
      }
    };

    updateVisibleCount();
    window.addEventListener("resize", updateVisibleCount);

    return () => window.removeEventListener("resize", updateVisibleCount);
  }, []);

  useEffect(() => {
    const maxIndex = Math.max(0, products.length - visibleCount);
    setIndex((prev) => Math.min(prev, maxIndex));
  }, [visibleCount]);

  const maxIndex = Math.max(0, products.length - visibleCount);

  const next = () => {
    setIndex((prev) => Math.min(prev + 1, maxIndex));
  };

  const previous = () => {
    setIndex((prev) => Math.max(prev - 1, 0));
  };

  return (
    <div className="product-carousel">
      <style>{`
      .product-carousel {
        position: relative;
        width: 100%;
      }

      .product-carousel-window {
        overflow: hidden;
        width: 100%;
      }

      .product-carousel-track {
        display: flex;
        gap: 24px;
        transition: transform 0.45s ease;
        will-change: transform;
      }

      .product-carousel-track .product-card {
        flex: 0 0 calc((100% - 72px) / 4);
        min-width: 0;
        box-sizing: border-box;
      }

      .carousel-controls {
        display: flex;
        justify-content: flex-end;
        gap: 10px;
        margin-bottom: 18px;
      }

      .carousel-btn {
        width: 42px;
        height: 42px;
        border: 1px solid rgba(110, 82, 53, 0.2);
        background: #fff;
        color: #6E5235;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        transition: all 0.2s ease;
      }

      .carousel-btn:hover:not(:disabled) {
        background: #6E5235;
        color: #fff;
      }

      .carousel-btn:disabled {
        opacity: 0.35;
        cursor: not-allowed;
      }

      /* Tablet */
      @media (max-width: 900px) {
        .product-carousel-track {
          gap: 24px;
        }

        .product-carousel-track .product-card {
          flex: 0 0 calc((100% - 24px) / 2);
        }
      }

      /* Mobile */
      @media (max-width: 600px) {
        .product-carousel-window {
          width: 100%;
          overflow: hidden;
        }

        .product-carousel-track {
          gap: 0;
          width: 100%;
        }

        .product-carousel-track .product-card {
          flex: 0 0 100%;
          width: 100%;
          max-width: 100%;
          min-width: 100%;
          box-sizing: border-box;
        }

        .carousel-controls {
          margin-bottom: 14px;
        }
      }
    `}</style>

      <div className="carousel-controls">
        <button
          className="carousel-btn"
          onClick={previous}
          disabled={index === 0}
          aria-label="Previous products"
        >
          <ChevronLeft size={20} />
        </button>

        <button
          className="carousel-btn"
          onClick={next}
          disabled={index === maxIndex}
          aria-label="Next products"
        >
          <ChevronRight size={20} />
        </button>
      </div>

      <div className="product-carousel-window">
        <div
          className="product-carousel-track"
          style={{
            transform:
              visibleCount === 1
                ? `translateX(-${index * 100}%)`
                : `translateX(calc(-${index} * (100% / ${visibleCount} + 24px)))`,
          }}
        >
          {products.map((p) => (
            <article className="product-card" key={p.slug}>
              <Link to={`/product-detail/${p.slug}`}>
                <ProductArt product={p} />
              </Link>

              <div className="product-card-body">
                <span>
                  {p.weight} · {p.brand}
                </span>

                <h3>{p.name}</h3>

                <div className="product-bottom">
                  <button onClick={() => onAdd(p)}>Add to Cart</button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
function ProductsGrid({ onAdd }) {
  return (
    <div className="products-page-grid">
      <style>{`
        .products-page-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 28px;
          width: 100%;
        }

        .products-page-grid .product-card {
          min-width: 0;
        }

        @media (max-width: 900px) {
          .products-page-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 22px;
          }
        }

        @media (max-width: 600px) {
          .products-page-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 14px;
          }

          .products-page-grid .product-card .product-art {
            height: 250px;
          }

          .products-page-grid .product-card-body {
            padding: 14px;
          }

          .products-page-grid .product-card h3 {
            font-size: 15px;
            line-height: 1.25;
          }

          .products-page-grid .product-bottom {
            flex-direction: column;
            align-items: stretch;
            gap: 10px;
          }

          .products-page-grid .product-bottom button {
            width: 100%;
          }
        }

        @media (max-width: 380px) {
          .products-page-grid {
            gap: 10px;
          }

          .products-page-grid .product-card .product-art {
            height: 210px;
          }

          .products-page-grid .product-card-body {
            padding: 11px;
          }

          .products-page-grid .product-card h3 {
            font-size: 14px;
          }

          .products-page-grid .product-card-body > span {
            font-size: 8px;
          }

          .products-page-grid .product-bottom strong {
            font-size: 16px;
          }

          .products-page-grid .product-bottom button {
            font-size: 9px;
            padding: 9px 8px;
          }
        }
      `}</style>

      {products.map((p) => (
        <article className="product-card" key={p.slug}>
          <Link to={`/product-detail/${p.slug}`}>
            <ProductArt product={p} />
          </Link>

          <div className="product-card-body">
            <span>
              {p.weight} · {p.brand}
            </span>

            <h3>{p.name}</h3>

            <div className="product-bottom">
              <button onClick={() => onAdd(p)}>Add to Cart</button>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}
function Benefits() {
  return (
    <section className="benefits">
      <div className="container">
        <div className="section-title centered">
          <span className="eyebrow">UNLOCK THE ADVANTAGES</span>
          <h2>
            Explore the Benefits
            <br />
            of <em>Makhana</em>
          </h2>
        </div>
        <div className="benefit-grid">
          {[
            "RICH IN PROTEIN",
            "LIGHT & CRUNCHY",
            "GLUTEN FREE",
            "ROASTED, NOT FRIED",
          ].map((x, i) => (
            <div className="benefit" key={x}>
              <span>0{i + 1}</span>
              <h3>{x}</h3>
              <p>
                {
                  [
                    "A wholesome snack with protein to complement your everyday nutrition.",
                    "A naturally light snack with a satisfying crunch, perfect for any time of day.",
                    "A naturally gluten-free snack that's easy to enjoy as part of your daily routine.",
                    "Enjoy delicious crunch with products that are roasted rather than fried.",
                  ][i]
                }
              </p>
            </div>
          ))}
        </div>
        <div className="ticker">
          {Array(3)
            .fill(
              "Premium Makhana  •  Fox Nuts  •  Light & Crunchy  •  Rich in Protein  •  Gluten Free  •  Roasted Not Fried  •  Wholesome Snacking  •  Natural Goodness  •  ",
            )
            .map((x, i) => (
              <span key={i}>{x}</span>
            ))}
        </div>
      </div>
    </section>
  );
}

const reviews = [
  [
    "Priya Sharma",
    "The makhana is light, crunchy and genuinely delicious. Perfect for an evening snack when I want something wholesome.",
  ],
  [
    "Rahul Mehta",
    "I really enjoyed the roasted texture and crunch. The makhana feels light and makes a great snack during busy workdays.",
  ],
  [
    "Ayesha Khan",
    "The quality is excellent and the makhana is wonderfully crunchy. It has quickly become one of my favorite everyday snacks.",
  ],
  [
    "Vikram Singh",
    "I love how versatile makhana is. It's great on its own and also works beautifully in homemade snacks and recipes.",
  ],
];
function Testimonials() {
  const [idx, setIdx] = useState(0);
  const r = reviews[idx];
  return (
    <section className="testimonials section">
      <div className="container">
        <div className="review-head">
          <div>
            <span className="eyebrow">CUSTOMER STORIES</span>
            <h2>
              People Love
              <br />
              <em>Our Makhana.</em>
            </h2>
            <p>
              Discover why makhana lovers choose our collection for light,
              crunchy and wholesome everyday snacking.
            </p>
          </div>
          <div className="review-controls">
            <button
              onClick={() =>
                setIdx((idx + reviews.length - 1) % reviews.length)
              }
            >
              <ChevronLeft />
            </button>
            <button onClick={() => setIdx((idx + 1) % reviews.length)}>
              <ChevronRight />
            </button>
          </div>
        </div>
        <div className="review-card">
          <div className="stars">
            {Array(5)
              .fill(0)
              .map((_, i) => (
                <Star key={i} fill="currentColor" size={17} />
              ))}
          </div>
          <blockquote>“{r[1]}”</blockquote>
          <div>
            <b>{r[0]}</b>
            <span>India</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProductsPage() {
  const { add } = useCart();
  return (
    <>
      <Header />
      <main>
        <section className="page-hero">
          <div className="container">
            <span className="eyebrow light">THE MAKHANA COLLECTION</span>
            <h1>
              Choose your
              <br />
              <em>favorite crunch.</em>
            </h1>
            <p>
              Premium makhana and fox nuts made for light, crunchy, and
              wholesome everyday snacking.
            </p>
          </div>
        </section>
        <section className="section">
          <div className="container">
            <ProductsGrid onAdd={add} />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

function ProductPage() {
  const { slug } = useParams();
  const { items, add, change } = useCart();
  const product = products.find((p) => p.slug === slug);
  if (!product) {
    return (
      <>
        <Header />
        <div
          className="container"
          style={{
            minHeight: "60vh",
            display: "grid",
            placeItems: "center",
            textAlign: "center",
          }}
        >
          <div>
            <span className="eyebrow">PRODUCT NOT FOUND</span>

            <h1>We couldn't find this product.</h1>

            <Link to="/products" className="dark-btn">
              Back to Products
            </Link>
          </div>
        </div>
        <Footer />
      </>
    );
  }
  const cartItem = items.find((item) => item.id === product.id);
  const quantity = cartItem?.qty || 0;
  return (
    <>
      <Header />
      <main>
        <div className="container breadcrumbs">
          <Link to="/">Home</Link>
          <span>/</span>
          <Link to="/products">Products</Link>
          <span>/</span>
          <b>{product.name}</b>
        </div>
        <section className="product-detail">
          <div className="detail-media">
            <ProductArt product={product} large />
            <div className="detail-chip">
              {product.weight} · {product.brand.toUpperCase()}
            </div>
          </div>

          <div className="detail-copy">
            <span className="eyebrow">{product.brand}</span>

            <h1>{product.name}</h1>

            <div className="detail-rating">
              <span>★★★★★</span> 4.9 · 128 reviews
            </div>

            <div className="detail-price">
              <small> {product.weight}</small>
            </div>

            <h3 className="product-tagline">{product.tagline}</h3>

            <p>{product.description}</p>

            <div className="detail-points">
              {product.features.map((feature) => (
                <span key={feature}>✓ {feature}</span>
              ))}
            </div>

            <div className="purchase">
              <div className="static-qty">
                <button
                  type="button"
                  onClick={() => {
                    if (cartItem) {
                      change(product.id, -1);
                    }
                  }}
                  disabled={!cartItem || quantity <= 1}
                  aria-label="Decrease quantity"
                >
                  <Minus size={16} />
                </button>

                <span>{quantity || 1}</span>

                <button
                  type="button"
                  onClick={() => {
                    if (cartItem) {
                      change(product.id, 1);
                    } else {
                      add(product);
                    }
                  }}
                  aria-label="Increase quantity"
                >
                  <Plus size={16} />
                </button>
              </div>

              <button className="add-large" onClick={() => add(product)}>
                Add to Cart <ShoppingBag size={18} />
              </button>
            </div>
          </div>
        </section>
        <section className="detail-info section">
          <div>
            <span className="eyebrow">ABOUT THE PRODUCT</span>

            <h2>
              A simple,
              <br />
              <em>delicious snack.</em>
            </h2>
          </div>

          <div className="info-copy">
            <p>{product.description}</p>

            <div className="info-grid">
              {product.features.map((feature, index) => (
                <div key={feature}>
                  <b>0{index + 1}</b>
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

function Contact() {
  return (
    <>
      <Header />
      <main>
        <section className="page-hero contact-hero">
          <div className="container">
            <span className="eyebrow light">GET IN TOUCH</span>
            <h1>
              We'd Love to
              <br />
              <em>Connect with You.</em>
            </h1>
            <p>
              Have questions about our premium makhana, custom orders, or
              partnerships? Reach out to our team via phone, email, or visit our
              shop.
            </p>
          </div>
        </section>
        <section className="section contact-section">
          <div className="container contact-grid">
            <div className="contact-info">
              <span className="eyebrow">CONTACT DETAILS</span>
              <div className="contact-item">
                <MapPin />
                <div>
                  <small>ADDRESS</small>
                  <h3>CENTURY DRY FRUITS</h3>
                  <p>
                    Reni Wali Gali,
                    <br />
                    Mangalwara, Bhopal
                  </p>
                </div>
              </div>
              <div className="contact-item">
                <Phone />
                <div>
                  <small>CALL / WHATSAPP</small>
                  <a href="tel:+919993763040">+919993763040</a>
                </div>
              </div>
              <div className="contact-item">
                <Mail />
                <div>
                  <small>EMAIL SUPPORT</small>
                  <a href="mailto:centurytradersfeedbacks@gmail.com">
                    centurytradersfeedbacks@gmail.com
                  </a>
                </div>
              </div>
              <div className="contact-item">
                <Clock />
                <div>
                  <small>BUSINESS HOURS</small>
                  <h3>Monday – Saturday</h3>
                  <p>9:00 AM – 6:00 PM IST</p>
                </div>
              </div>
            </div>
            <div className="map">
              <div className="map-grid" />
              <div className="map-pin">
                <b>CENTURY DRY FRUITS</b>
                <span>Reni Wali Gali, Mangalwara, Bhopal</span>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

function About() {
  return (
    <>
      <Header />

      <main>
        {/* Hero */}
        <section className="page-hero about-hero">
          <div className="container">
            <span className="eyebrow light">OUR STORY</span>

            <h1>
              Tradition Meets
              <br />
              <em>Modern Snacking.</em>
            </h1>

            <p>
              At Century Dry Fruits, we bring premium makhana to modern
              lifestyles, offering light, crunchy and delicious snacks made for
              everyday enjoyment.
            </p>
          </div>
        </section>

        {/* Story */}
        <section className="section about-story">
          <div className="container about-story-grid">
            <div>
              <span className="eyebrow">WHO WE ARE</span>

              <h2>
                Bringing Better Snacking to
                <br />
                <em>Everyday Life.</em>
              </h2>
            </div>

            <div className="about-copy">
              <p>
                At Century Dry Fruits, we believe wholesome snacking should be
                simple, delicious and accessible. Our goal is to bring quality
                makhana and fox nut products to modern consumers looking for
                something light and satisfying.
              </p>

              <p>
                We carefully select products that offer great taste, enjoyable
                crunch and convenient everyday snacking — from a quick bite
                between meals to something you can share with family and
                friends.
              </p>

              <p>
                From sourcing to packaging, we focus on quality, consistency and
                creating a collection our customers can trust.
              </p>
            </div>
          </div>
        </section>

        {/* Mission */}
        <section className="about-mission">
          <div className="container about-mission-grid">
            <div className="mission-art">
              <div className="mission-circle">
                <span>Makhana</span>
              </div>
            </div>

            <div>
              <span className="eyebrow light">OUR MISSION</span>

              <h2>
                Make healthy living
                <br />
                <em>simple & delicious.</em>
              </h2>

              <p>
                We believe wholesome snacking shouldn't feel complicated. Our
                mission is to bring delicious, quality makhana products to
                modern lifestyles, making everyday snacking simple, light and
                enjoyable.
              </p>

              <div className="mission-points">
                <div>
                  <Check size={17} />
                  <span>Premium Makhana Products</span>
                </div>

                <div>
                  <Check size={17} />
                  <span>Quality You Can Taste</span>
                </div>

                <div>
                  <Check size={17} />
                  <span>Light & Crunchy Snacking</span>
                </div>

                <div>
                  <Check size={17} />
                  <span>Made for Everyday Enjoyment</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="section about-values">
          <div className="container">
            <div className="section-title centered">
              <span className="eyebrow">WHAT WE BELIEVE</span>

              <h2>
                Built Around
                <br />
                <em>Better Snacking.</em>
              </h2>
            </div>

            <div className="values-grid">
              <div className="value-card">
                <span>01</span>
                <h3>QUALITY</h3>
                <p>
                  We focus on quality products that deliver great taste,
                  satisfying crunch and consistent everyday enjoyment.
                </p>
              </div>

              <div className="value-card">
                <span>02</span>
                <h3>AUTHENTICITY</h3>
                <p>
                  We stay true to the natural character of makhana while
                  bringing it into modern snacking.
                </p>
              </div>

              <div className="value-card">
                <span>03</span>
                <h3>SIMPLICITY</h3>
                <p>
                  We believe good snacking should be simple, convenient and
                  enjoyable for everyone.
                </p>
              </div>

              <div className="value-card">
                <span>04</span>
                <h3>TRUST</h3>
                <p>
                  We aim to build lasting relationships through quality
                  products, consistency and customer satisfaction.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="about-cta">
          <div className="container">
            <span className="eyebrow light">DISCOVER CENTRU DRY FRUITS</span>

            <h2>
              Find Your
              <br />
              <em>Perfect Crunch.</em>
            </h2>

            <p>
              Explore our collection of premium makhana and discover your
              favorite for everyday snacking.
            </p>

            <Link to="/products" className="light-btn">
              Explore Products
              <ArrowRight size={17} />
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

function FloatingContactButtons({ hidden }) {
  if (hidden) return null;

  const phoneNumber = "919993763040";

  return (
    <div className="floating-contact-buttons">
      {/* Call Now */}
      <a
        href={`tel:+${phoneNumber}`}
        className="floating-call-btn"
        aria-label="Call Now"
      >
        <svg
          viewBox="0 0 24 24"
          width="18"
          height="18"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M6.62 10.79a15.053 15.053 0 0 0 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
        </svg>
        <span className="btn-text">Call Now</span>
      </a>

      {/* WhatsApp */}
      <a
        href={`https://wa.me/${phoneNumber}`}
        target="_blank"
        rel="noopener noreferrer"
        className="floating-whatsapp-btn"
        aria-label="Chat with us on WhatsApp"
      >
        <svg
          viewBox="0 0 32 32"
          width="18"
          height="18"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M16.001 3C9.373 3 4 8.373 4 15c0 2.637.86 5.08 2.317 7.06L4.6 28.4l6.53-1.71A11.94 11.94 0 0 0 16.001 27C22.628 27 28 21.627 28 15S22.628 3 16.001 3Zm0 21.818a9.77 9.77 0 0 1-4.98-1.363l-.357-.212-3.878 1.016 1.036-3.78-.233-.39A9.78 9.78 0 0 1 6.182 15c0-5.421 4.398-9.818 9.819-9.818S25.818 9.579 25.818 15 21.421 24.818 16.001 24.818Zm5.377-7.34c-.294-.147-1.74-.858-2.009-.956-.269-.098-.465-.147-.661.147-.196.294-.759.955-.931 1.152-.171.196-.343.221-.637.074-.294-.147-1.242-.458-2.366-1.462-.874-.78-1.464-1.744-1.636-2.038-.171-.294-.018-.453.129-.6.132-.132.294-.343.441-.514.147-.171.196-.294.294-.49.098-.196.049-.368-.024-.515-.074-.147-.661-1.596-.906-2.185-.239-.573-.482-.496-.661-.505l-.563-.01c-.196 0-.515.074-.784.368-.269.294-1.028 1.004-1.028 2.451 0 1.447 1.053 2.845 1.2 3.042.147.196 2.073 3.166 5.022 4.44.702.303 1.25.484 1.677.62.705.224 1.346.192 1.853.117.565-.084 1.74-.712 1.985-1.4.245-.688.245-1.278.172-1.4-.073-.123-.269-.196-.563-.343Z" />
        </svg>
        <span className="btn-text">WhatsApp</span>
      </a>
    </div>
  );
}

function App() {
  useEffect(() => {
    const elements = document.querySelectorAll(".scroll-reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.15,
      },
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);
  return (
    <CartProvider>
      <ScrollToTop />
      <Routes>
        <Route path="*" element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/product-detail/:slug" element={<ProductPage />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </CartProvider>
  );
}
createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
);
