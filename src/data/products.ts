export const categories = [
  { id: 'koltuk', name: 'Koltuk Takımları', image: 'living', note: 'Birlikte geçirilen anlar' },
  { id: 'kose', name: 'Köşe Koltuklar', image: 'corner', note: 'Konforun en güzel köşesi' },
  { id: 'yatak', name: 'Yatak Odası', image: 'bedroom', note: 'Size ait bir dinginlik' },
  { id: 'yemek', name: 'Yemek Odası', image: 'dining', note: 'Sofranın etrafında' },
  { id: 'tv', name: 'TV Üniteleri', image: 'tv', note: 'Sade ve dengeli' },
  { id: 'masa', name: 'Masa ve Sandalyeler', image: 'dining', note: 'Doğal bir buluşma' },
] as const
export type Category = typeof categories[number]['id'] | 'diger'
export type Filter = Category | 'all'
export interface Product { id: number; name: string; category: Category; price: number; image: string; description: string; material: string }
export const products: Product[] = [
  { id: 1, name: 'Milano Koltuk Takımı', category: 'koltuk', price: 69900, image: 'living', description: 'Yumuşak hatlar ve sıcak tonlarla yaşam alanınızda sakin bir denge.', material: 'Keten dokulu kumaş · Ceviz tonları' },
  { id: 2, name: 'Luna Köşe Koltuk', category: 'kose', price: 54900, image: 'corner', description: 'Geniş oturum ve yalın çizgilerle dinlenmeye ayrılmış bir köşe.', material: 'Dokulu kumaş · Modüler görünüm' },
  { id: 3, name: 'Verona Yatak Odası', category: 'yatak', price: 89900, image: 'bedroom', description: 'Doğal dokuların dinginliği, güne yavaş bir başlangıç.', material: 'Yumuşak başlık · Ahşap detaylar' },
  { id: 4, name: 'Aura Yemek Odası', category: 'yemek', price: 64900, image: 'dining', description: 'Paylaşılan anlara eşlik eden sıcak ve davetkâr bir tasarım.', material: 'Ceviz görünümü · Döşemeli sandalyeler' },
  { id: 5, name: 'Nova TV Ünitesi', category: 'tv', price: 24900, image: 'tv', description: 'Sade formlar ve doğal ahşap tonlarıyla dengeli bir görünüm.', material: 'Ahşap dokusu · Yalın çizgiler' },
  { id: 6, name: 'Siena Berjer', category: 'diger', price: 18900, image: 'chair', description: 'En sevdiğiniz kitap ve size ait, sessiz bir mola.', material: 'Bukle dokusu · Ahşap ayaklar' },
  { id: 7, name: 'Petra Orta Sehpa', category: 'diger', price: 12900, image: 'table', description: 'Heykelsi bir form, doğal bir doku ve zamansız bir duruş.', material: 'Yuvarlak form · Ceviz tonları' },
  { id: 8, name: 'Mira Sandalye Seti', category: 'masa', price: 29900, image: 'dining', description: 'Sofralara hafiflik katan zarif çizgiler ve yumuşak dokular.', material: 'Ahşap çerçeve · Açık tonlu döşeme' },
]
export const price = (value: number) => new Intl.NumberFormat('tr-TR', { style: 'currency', currency: 'TRY', maximumFractionDigits: 0 }).format(value)
export const imagePath = (name: string) => `${import.meta.env.BASE_URL}images/${name}.webp`
export const categoryName = (id: Category) => categories.find(c => c.id === id)?.name ?? 'Diğer'
