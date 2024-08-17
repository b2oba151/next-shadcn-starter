export default function Footer() {
  return (
    <footer className='py-4'>
      <div className='container mx-auto px-4'>
        <p className='text-center text-sm text-gray-500'>
          &copy; {new Date().getFullYear()} <span className='font-semibold text-gray-900 dark:text-white'>[Nom entreprise]</span>. Tous droits réservés.<br/>
          <a href='#' className='hover:text-gray-600 text-gray-500 transition-colors duration-200' target="_blank">Mentions légales</a> | 
          <a href='#' className='hover:text-gray-600 text-gray-500 transition-colors duration-200 mx-2' target="_blank">Politique de confidentialité</a> | 
          <a href='#' className='hover:text-gray-600 text-gray-500 transition-colors duration-200' target="_blank">Conditions générales d'utilisation</a>
          <br/>
          Contactez-nous à : <a href='mailto:[Adresse de contact]' className='hover:text-white text-gray-400 transition-colors duration-200'>[Adresse de contact]</a>.
        </p>
      </div>
    </footer>
  )
}
