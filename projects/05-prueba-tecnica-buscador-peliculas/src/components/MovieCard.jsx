export default function MovieCard ({ imdbID, title, year, type, poster }) {
  return (
    <article
      key={imdbID}
      className='flex flex-col w-full overflow-hidden transition-all rounded-lg cursor-pointer bg-slate-600 hover:brightness-110 hover:scale-[1.02] shadow-white hover:[box-shadow:_0_0_8px_var(--tw-shadow-color)] relative group'
    >
      <img src={poster} alt={title} className='object-cover' />
      <section className='relative flex flex-col gap-4 p-4'>
        {/* PARA EL REFLEJO DE LA IMAGEN DE ARRIBA */}
        <img src={poster} alt={title} className='absolute inset-0 object-cover w-full duration-500 opacity-0 group-hover:opacity-50 blur -z-10 -scale-y-100' />
        <h3 className='text-xl font-bold group-hover:shadow-black group-hover:[text-shadow:_2px_2px_5px_var(--tw-shadow-color)]'>{title}</h3>
        <div className='flex justify-between gap-2'>
          <span className='px-2 capitalize rounded bg-slate-700 group-hover:[box-shadow:_0_0_5px_var(--tw-shadow-color)] duration-400'>{type}</span>
          <span className='px-2 capitalize rounded bg-slate-700 group-hover:[box-shadow:_0_0_5px_var(--tw-shadow-color)] duration-400 '>{year}</span>
        </div>
      </section>
    </article>
  )
}
