import axios from "axios";
import Banner from "./Banner";

export async function generateMetadata() {
  try {
    const res = await fetch("https://mans-server.vercel.app/banner", { 
      next: { revalidate: 3600 } // Refreshes data every hour
    });
    const slides = await res.json();
    
    return {
      title: slides[0]?.heading || "MANS Packaging - Premium Solutions",
      description: slides[0]?.description || "Leading packaging manufacturer in Dhaka, Bangladesh.",
    };
  } catch (error) {
    return { title: "MANS Packaging" };
  }
}

export default async function Page() {
  // 2. Fetch data here on the server
  const [slides, setSlides] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get("https://mans-server.vercel.app/banner");
      setSlides(res.data || []);
      setLoading(false);
    };
      fetchData();
    }, [setSlides]);
  // const res = await fetch("https://mans-server.vercel.app/banner");
  // const slides = await res.json();

  return (
    <main>
      {/* 3. Pass the slides directly to the client component */}
      <Banner initialSlides={slides} loading={loading} />
      
      {/* Hidden H1 for SEO keyword strength */}
      <h1 style={{ display: 'none' }}>Custom Packaging Solutions by MANS Packaging</h1>
    </main>
  );
}