pannellum.viewer('panorama', {
  default: {
    firstScene: 'Panorama',
    author: '구교승 권준서 김도현 양지호',
    sceneFadeDuration: 1000,
    preview: '../public/img/Preview.jpg',
  },

  scenes: {
    Panorama: convertScenes('Panorama', 200, 0, 0, [convertHotSpots(-2.1, 132.9, 'Panorama1', 'Panorama1')]),

    Panorama1: convertScenes('Panorama1', 200, 0, 0, [convertHotSpots(0, 90, 'Panorama', 'Panorama'), convertHotSpots(-10, -70, 'Panorama2', 'Panorama2')]),

    Panorama2: convertScenes('Panorama2', 200, 0, 0, [convertHotSpots(10, -145, 'Panorama1', 'Panorama1')]),
  },
  autoLoad: true,
});

function convertScenes(title, hfov, pitch, yaw, hotSpots) {
  return {
    title: title,
    hfov: hfov,
    pitch: pitch,
    yaw: yaw,
    type: 'equirectangular',
    panorama: `../public/img/${title}.jpg`,
    hotSpots: hotSpots,
  };
}

function convertHotSpots(pitch, yaw, text, sceneId, targetPitch, targetYaw) {
  return {
    pitch: pitch,
    yaw: yaw,
    type: 'scene',
    text: text,
    sceneId: sceneId,
    targetPitch: targetPitch,
    targetYaw: targetYaw,
  };
}
