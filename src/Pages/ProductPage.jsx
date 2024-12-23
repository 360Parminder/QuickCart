import React from 'react';

const ProductPage = () => {
  const products = [
    {
      name: 'Toothpaste',
      price: '₹199',
      image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.OL3d2s1KQNTFK60NWkz_RgHaHa%26pid%3DApi&f=1&ipt=1aa905914d40de593b4978c05b7a8f36f6c74afb6e985bf48359293de96a0e8b&ipo=images',
    },
    {
      name: 'Shampoo',
      price: '₹349',
      image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.UbnSeKY3dZvPfzXCMABz-gHaHa%26pid%3DApi&f=1&ipt=21adc1cdb952ae120a043084ad1e3f403ba57259f76765e4f7e009860779150d&ipo=images',
    },
    {
      name: 'Soap',
      price: '₹99',
      image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.XHq097Mp4R0rayup6qVOXAHaF3%26pid%3DApi&f=1&ipt=3c91776ba0ee3faba52fcd70ad532e621b9f9a6edd04c0bcb251ad308d302171&ipo=images',
    },
    {
      name: 'Rice (1kg)',
      price: '₹80',
      image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.ag8a43MsHWHJja5dqDSgygHaE8%26pid%3DApi&f=1&ipt=3b7812db688ea7b3a0af7e8b4fbf5a87633e28b8c05cefc3116b1c7e832caa4f&ipo=images',
    },
    {
      name: 'Cooking Oil (1L)',
      price: '₹150',
      image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.um_Ulyg8799NrYV92pmVKwHaGr%26pid%3DApi&f=1&ipt=986d82cfd0ef6d4735d6d580cb1d7770cf6e68a81fd5a75a5e4ab5130933b91a&ipo=images',
    },
    {
      name: 'Sugar (1kg)',
      price: '₹55',
      image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.y1mfIiKOxays4TQghhXREQHaHa%26pid%3DApi&f=1&ipt=6e64ba4c1c9f02d5dbd13e44b497f7723fb05a998c63b8b795904c47e84c8d5e&ipo=images',
    },
    {
      name: 'Tea (500g)',
      price: '₹180',
      image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.HSF1XEphnA8l104r5uKbVwHaHa%26pid%3DApi&f=1&ipt=ccd59561e95d87f4918c88b27030c5629b5cd2e730637b0462f36c8fcad2c408&ipo=images',
    },
    {
      name: 'Biscuits',
      price: '₹30',
      image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.9t79u9ihgIJ2fjiRlAX4nAHaFc%26pid%3DApi&f=1&ipt=20cc780cfbeefe3538d973a76df635e6a651abc6b68bdab3749155b0cd7dafea&ipo=images',
    },
    {
      name: 'Laundry Detergent',
      price: '₹250',
      image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.S-dAoQI3VBOlHut4uTlSDgHaHa%26pid%3DApi&f=1&ipt=8f97d1079c95b670f3614878ce4829b44e82214904477ab711feaf1eccc83012&ipo=images',
    },
    {
      name: 'Tissue Paper (Pack of 4)',
      price: '₹120',
      image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.ZKruS_tBSUgZ16xnw62jrAHaHa%26pid%3DApi&f=1&ipt=3373a7432d1aa4f7340fcb53e41ba35891ee0dd644fc682179ae9bec7d5292ec&ipo=images',
    },
  ];

  const pageStyle = {
    backgroundColor: '#000',
    color: '#fff',
    minHeight: '100vh',
    padding: '20px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };

  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(5, 1fr)',
    gap: '20px',
  };

  const productStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    border: '1px solid #fff',
    borderRadius: '10px',
    padding: '10px',
    textAlign: 'center',
  };

  const imgStyle = {
    borderRadius: '10px',
    width: '150px',
    height: '150px',
    objectFit: 'cover',
    marginBottom: '10px',
  };

  return (
    <div style={pageStyle}>
      <div style={gridStyle}>
        {products.map((product, index) => (
          <div key={index} style={productStyle}>
            <img src={product.image} alt={product.name} style={imgStyle} />
            <h3>{product.name}</h3>
            <p>{product.price}</p>
           <div>
           <button className='rounded-md px-1 bg-slate-50 text-black'>-</button>
            <span>0</span>
           <button>+</button>
           </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductPage;
