export default function NumResults({ games }) {
  return (
    <p className='num-results'>
      Found <strong>{games.length}</strong> results
    </p>
  );
}
