import Image from "next/image";

export const Logo = ({
  logoSrc = "/jira.svg",
  logoWidth = 48,
  logoHeight = 56,
  showText = true,
  altText = "Jira Logo",
}) => {
  return (
    <div className="flex items-center justify-start gap-2 pl-2.5">
      <Image
        src={logoSrc}
        width={logoWidth}
        height={logoHeight}
        alt={altText}
        priority // Ensures the logo is loaded quickly.
      />
      {showText && (
        <span className="text-xl font-medium sm:text-2xl md:text-3xl">
          Jira
        </span>
      )}
    </div>
  );
};
