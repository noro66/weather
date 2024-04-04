import wallpaper from '../../assets/images/bg-image.jpg'
export  const Wallpaper = (props) => {
    return (
        <>
           <div className={'wallpaper-container position-fixed d-flex top-0 bottom-0 end-0 start-0'}>
               <img src={wallpaper} className={'wallpaper'} alt="Wallpaper"/>
           </div>
        </>
    );
};
