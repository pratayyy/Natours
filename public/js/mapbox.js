/* eslint-disable */
export const displayMap = (locations) => {
  mapboxgl.accessToken =
    'pk.eyJ1IjoicHJhdGF5eXl5IiwiYSI6ImNsdDF1YWg3MTFmNzMya2xpc3l0bGR3dDIifQ.Cmg4N-FVSARf_ODMHd3e9Q';

  const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/pratayyyy/clt1v0z1700ir01mefvjb687e',
    scrollZoom: false,
  });

  const bounds = new mapboxgl.LngLatBounds();

  locations.forEach((loc) => {
    // Create marker
    const el = document.createElement('div');
    el.className = 'marker';

    // Add marker
    new mapboxgl.Marker({
      element: el,
      anchor: 'bottom',
    })
      .setLngLat(loc.coordinates)
      .addTo(map);

    // Add popup
    new mapboxgl.Popup({
      offset: 30,
      focusAfterOpen: false,
    })
      .setLngLat(loc.coordinates)
      .setHTML(`<p>Day ${loc.day}: ${loc.description}</p>`)
      .addTo(map);

    // Extend map bounds to include the current location
    bounds.extend(loc.coordinates);
  });

  const nav = new mapboxgl.NavigationControl();
  map.addControl(nav, 'top-right');

  map.fitBounds(bounds, {
    padding: {
      top: 200,
      bottom: 150,
      left: 100,
      right: 100,
    },
  });
};
