

const PrivacyTerms = ({desc,title}) => {
  return (
    <div id="terms">
        <h1 className="font-['GilroyMedium'] py-2 text-lg">{title}</h1>
        <p className="font-['GilroyRegular'] text-zinc-300 text-sm ">{desc}</p>
    </div>
  )
}

export default PrivacyTerms