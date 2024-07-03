import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { SearchInput } from '../components/SearchInput';
import { searchGet } from '../redux/actions/property';

const SearchTab = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();

  const [sideBarData, setSideBarData] = useState({
    type: 'all',
    parking: false,
    furnished: false,
    offer: false,
    sort: 'createdAt',
    order: 'desc'
  });

  const handleChange = (e) => {
    const { name, value, checked } = e.target;
    if (['all', 'rent', 'sale'].includes(name)) {
      setSideBarData({
        ...sideBarData,
        type: name
      });
    } else if (['offer', 'furnished', 'parking'].includes(name)) {
      setSideBarData({
        ...sideBarData,
        [name]: checked
      });
    } else if (name === 'sort_order') {
      const sort = value.split('_')[0] || 'createdAt';
      const order = value.split('_')[1] || 'desc';
      setSideBarData({
        ...sideBarData,
        sort,
        order
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const urlParams = new URLSearchParams();
    urlParams.set('type', sideBarData.type);
    urlParams.set('parking', sideBarData.parking);
    urlParams.set('furnished', sideBarData.furnished);
    urlParams.set('offer', sideBarData.offer);
    urlParams.set('sort', sideBarData.sort);
    urlParams.set('order', sideBarData.order);
    const searchQuery = urlParams.toString();
    navigate(`/search?${searchQuery}`);
    dispatch(searchGet(searchQuery));
  };

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const typeTerm = urlParams.get('type');
    const parkingTerm = urlParams.get('parking');
    const furnishedTerm = urlParams.get('furnished');
    const offerTerm = urlParams.get('offer');
    const sortTerm = urlParams.get('sort');
    const orderTerm = urlParams.get('order');

    setSideBarData({
      type: typeTerm || 'all',
      parking: parkingTerm === 'true',
      furnished: furnishedTerm === 'true',
      offer: offerTerm === 'true',
      sort: sortTerm || 'createdAt',
      order: orderTerm || 'desc',
    });
  }, [location.search]);

  const styleInput = 'text-md bg-slate-200 w-[29rem] py-4 px-10 rounded-full outline-none placeholder:text-md';
  const styleButton = 'absolute top-2 right-5 transition-all duration-300 font-semibold bg-color-azul border border-color-azul text-white font-nunito py-2 px-5 rounded-full hover:bg-transparent hover:text-color-azul';
  const styleIcon = 'absolute top-5 left-3';

  return (
    <section className='w-[25%] h-screen fixed top-32 left-36 z-10 border-r border-r-2 overflow-y-auto'>
      <SearchInput styleInput={styleInput} styleButton={styleButton} styleIcon={styleIcon} />
      <form onSubmit={handleSubmit} className='mt-2 flex flex-col gap-4'>
        <div className="flex gap-4 flex-wrap items-center">
          <label className='text-lg'>Tipo:</label>
          <div className="flex items-center gap-2 font-semibold">
            <input
              type="checkbox"
              name='all'
              className='w-4 h-4 cursor-pointer'
              checked={sideBarData.type === 'all'}
              onChange={handleChange}
            />
            <span>Alquilar & Comprar</span>
          </div>
          <div className=" flex items-center gap-2 font-semibold">
            <input
              type="checkbox"
              name="rent"
              className="w-4 h-4 cursor-pointer"
              checked={sideBarData.type === 'rent'}
              onChange={handleChange}
            />
            <span>Alquilar</span>
          </div>
          <div className=" flex items-center gap-2 font-semibold">
            <input
              type="checkbox"
              name="sale"
              className="w-4 h-4 cursor-pointer"
              checked={sideBarData.type === 'sale'}
              onChange={handleChange}
            />
            <span>Comprar</span>
          </div>
          <div className=" flex items-center gap-2 font-semibold">
            <input
              type="checkbox"
              name="offer"
              className="w-4 h-4"
              checked={sideBarData.offer}
              onChange={handleChange}
            />
            <span>Oferta</span>
          </div>
        </div>
        <div className="flex gap-4 flex-wrap items-center">
          <label className="text-lg">Comodidades:</label>
          <div className=" flex items-center gap-2 font-semibold">
            <input
              type="checkbox"
              name="parking"
              className="w-4 h-4"
              checked={sideBarData.parking}
              onChange={handleChange}
            />
            <span>Estacionamiento</span>
          </div>
          <div className=" flex items-center gap-2 font-semibold">
            <input
              type="checkbox"
              name="furnished"
              className="w-4 h-4"
              checked={sideBarData.furnished}
              onChange={handleChange}
            />
            <span>Amueblado</span>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <label>Ordenar</label>
          <select name="sort_order"
            className="border rounded-lg p-3"
            onChange={handleChange}
            defaultValue={'createdAt_desc'}
          >
            <option value='regularPrice_desc'>Precio alto a bajo</option>
            <option value='regularPrice_asc'>Precio bajo a alto</option>
            <option value='createdAt_desc'>Recientes</option>
            <option value='createdAt_asc'>Antiguas</option>
          </select>
        </div>
        <button className="bg-slate-700 p-3 text-white uppercase rounded-lg hover:opacity-90">Buscar</button>
      </form>
    </section>
  );
};

export { SearchTab };
