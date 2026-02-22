export const getRouteSection = (pathname: string) => {
  const segments = pathname.split("/").filter(Boolean);
  return segments[0] || "/";
};

export const getCurrentSectionElement = (pathname: string) => {
  const segments = pathname.split("/").filter(Boolean);
  return segments[1] || "/";
}
