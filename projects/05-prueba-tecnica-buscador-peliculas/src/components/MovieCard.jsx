export default function MovieCard ({ Title, Year, imdbID, Type, Poster }) {
  return (
    <article
      key={imdbID}
      className='flex flex-col w-full overflow-hidden rounded-lg shadow bg-slate-600'
    >
      <img src={Poster} alt={Title} className='object-cover' />
      <section className='flex flex-col gap-2 p-4'>
        <h3 className=''>{Title}</h3>
        <div className='flex justify-between'>
          <span className='px-2 capitalize rounded bg-slate-700'>{Type}</span>
          <span className='px-2 capitalize rounded bg-slate-700'>{Year}</span>
        </div>
      </section>
    </article>
  )
}
