import { companyLogos } from "../constants";

const CompanyLogos = ({ className }) => {
  return (
    <div className={className}>
      <h5 className="tagline mb-6 text-center text-n-1/50">
        Helping students craft their unique learning paths with Skill Quest{" "}
      </h5>

      <ul className="flex">
        {companyLogos.map((logo, index) => (
          <li
            className="flex flex-1 items-center justify-center h-[8.5rem]"
            key={index}
          >
            <img src={logo} width={134} height={28} alt={logo} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CompanyLogos;
