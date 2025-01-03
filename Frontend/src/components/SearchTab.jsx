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
    propertyType:'all',
    sort: 'createdAt',
    order: 'desc'
  });

  const handleChange = (e) => {
    const { name, value, checked } = e.target;
    if (['all', 'rent', 'sale'].includes(name)) {
      setSideBarData({
        ...sideBarData,
        type: name
      })
    } 
    else if (['all', 'house', 'apartment'].includes(name)) {
      setSideBarData({
        ...sideBarData,
        propertyType: name
      });
    }
    else if (['offer', 'furnished', 'parking'].includes(name)) {
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
    urlParams.set('propertyType', sideBarData.propertyType);
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
    const propertyTypeTerm = urlParams.get('propertyType')
    const furnishedTerm = urlParams.get('furnished');
    const offerTerm = urlParams.get('offer');
    const sortTerm = urlParams.get('sort');
    const orderTerm = urlParams.get('order');

    setSideBarData({
      type: typeTerm || 'all',
      parking: parkingTerm === 'true',
      furnished: furnishedTerm === 'true',
      propertyType: propertyTypeTerm || 'all',
      offer: offerTerm === 'true',
      sort: sortTerm || 'createdAt',
      order: orderTerm || 'desc',
    });
  }, [location.search]);

  const styleInput = ' relative text-md   bg-slate-200 w-[70vw] lg:w-[24vw] lg:left-0 py-4 px-10 rounded-full outline-none placeholder:text-sm lg:placeholder:text-md';
  const styleButton = 'absolute top-2 right-[1vw] lg:right-[66%] w-fit transition-all duration-300 font-semibold bg-color-azul border border-color-azul text-white font-nunito py-2 px-5 xl:right-[42%] rounded-full hover:bg-transparent hover:text-color-azul';
  const styleIcon = 'absolute top-5 left-4 lg:left-3';

  return (
    <section className='w-[75vw] h-[74%] fixed top-32 md:w-[100%] left-[15vw] lg:left-[7vw] z-10 overflow-y-auto overflow-x-hidden lg:w-[25%]'>
      <SearchInput styleInput={styleInput} styleButton={styleButton} styleIcon={styleIcon} />
      <form onSubmit={handleSubmit} className='mt-2 flex flex-col gap-4 w-[70vw] lg:w-[25vw]'>
        <div className="flex gap-4 flex-wrap items-center">
          <label className='text-lg font-semibold'>Tipo:</label>
          <div className="flex items-center gap-2 font-semibold">
            <input
              type="checkbox"
              name='all'
              className='w-4 h-4 cursor-pointer'
              checked={sideBarData.type === 'all'}
              onChange={handleChange}
            />
            <span className="text-sm">Alquilar & Comprar</span>
          </div>
          <div className=" flex items-center gap-2 font-semibold">
            <input
              type="checkbox"
              name="rent"
              className="w-4 h-4 cursor-pointer"
              checked={sideBarData.type === 'rent'}
              onChange={handleChange}
            />
            <span className="text-sm">Alquilar</span>
          </div>
          <div className=" flex items-center gap-2 font-semibold">
            <input
              type="checkbox"
              name="sale"
              className="w-4 h-4 cursor-pointer"
              checked={sideBarData.type === 'sale'}
              onChange={handleChange}
            />
            <span className="text-sm">Comprar</span>
          </div>
          <div className=" flex items-center gap-2 font-semibold">
            <input
              type="checkbox"
              name="offer"
              className="w-4 h-4"
              checked={sideBarData.offer}
              onChange={handleChange}
            />
            <span className="text-sm">Oferta</span>
          </div>
        </div>
        <div className="flex gap-4 flex-wrap items-center">
          <label className="text-lg font-semibold">Comodidades:</label>
          <div className=" flex items-center gap-2 font-semibold">
            <input
              type="checkbox"
              name="parking"
              className="w-4 h-4"
              checked={sideBarData.parking}
              onChange={handleChange}
            />
            <span className="text-sm">Estacionamiento</span>
          </div>
          <div className=" flex items-center gap-2 font-semibold">
            <input
              type="checkbox"
              name="furnished"
              className="w-4 h-4"
              checked={sideBarData.furnished}
              onChange={handleChange}
            />
            <span className="text-sm">Amueblado</span>
          </div>
          
        </div>
        <div className="flex gap-4 flex-wrap items-center">
        <label className="text-lg font-semibold">Propiedades:</label>
        <div className=" flex items-center gap-2 font-semibold">
            <input
              type="checkbox"
              name="apartment"
              className="w-4 h-4"
              checked={sideBarData.propertyType === 'apartment'}
              onChange={handleChange}
            />
            <span className="text-sm">Departamentos</span>
          </div>
          <div className=" flex items-center gap-2 font-semibold">
            <input
              type="checkbox"
              name="house"
              className="w-4 h-4"
              checked={sideBarData.propertyType === 'house'}
              onChange={handleChange}
            />
            <span className="text-sm">Casas</span>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <label className='text-lg font-semibold'>Ordenar</label>
          <select name="sort_order"
            className="border rounded-lg p-3 cursor-pointer w-[6rem] md:w-[11rem] " 
            onChange={handleChange}
            defaultValue={'createdAt_desc'}
          >
            <option value='regularPrice_desc'>Precio alto a bajo</option>
            <option value='regularPrice_asc'>Precio bajo a alto</option>
            <option value='createdAt_desc'>Recientes</option>
            <option value='createdAt_asc'>Antiguas</option>
          </select>
        </div>
        <button className="bg-color-azul font-nunito border border-color-azul transition-all duration-300 p-3 w-[10rem] lg:mx-auto text-white uppercase rounded-lg hover:bg-transparent hover:text-color-azul">Buscar</button>
      </form>
    </section>
  );
};

export { SearchTab };
