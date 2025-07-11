export default function formatDate(isoString) {
  const date = new Date(isoString);
  
  const options = {
    year: 'numeric',
    month: 'long', // can also be "short" for "Jul"
    day: 'numeric',
  };

  return date.toLocaleDateString('en-US', options);
}
