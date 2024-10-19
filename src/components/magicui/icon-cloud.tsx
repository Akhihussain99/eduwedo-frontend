import React from 'react';

const slugs = [
  "typescript",
  "javascript",
  "dart",
  "java",
  "react",
  "flutter",
  "android",
  "html5",
  "css3",
  "nodedotjs",
  "express",
  "nextdotjs",
  "prisma",
  "amazonaws",
  "postgresql",
  "firebase",
  "nginx",
  "vercel",
  "testinglibrary",
  "jest",
  "cypress",
  "docker",
  "git",
  "jira",
  "github",
  "gitlab",
  "visualstudiocode",
  "androidstudio",
  "sonarqube",
  "figma",
];

const IconCloud: React.FC<{ iconSlugs: string[] }> = ({ iconSlugs }) => {
  return (
    <div className="flex flex-wrap justify-center">
      {iconSlugs.map((slug) => (
        <img
          key={slug}
          src={`https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/${slug}.svg`}
          alt={slug}
          className="w-8 h-8 m-2 opacity-50 hover:opacity-100 transition-opacity duration-300"
        />
      ))}
    </div>
  );
};

export function IconCloudDemo() {
  return (
    <div className="relative flex size-full max-w-lg items-center justify-center overflow-hidden rounded-lg border bg-background px-20 pb-20 pt-8">
      <IconCloud iconSlugs={slugs} />
    </div>
  );
}

export default IconCloud;