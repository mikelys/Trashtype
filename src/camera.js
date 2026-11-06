import { Capacitor } from '@capacitor/core';
import { Camera, CameraResultType, CameraSource, CameraDirection } from '@capacitor/camera';

export const isNative = Capacitor.isNativePlatform();

// Browser builds keep their file inputs; iOS uses the system camera/photo picker.
export async function capturePhoto(source) {
  const photo = await Camera.getPhoto({
    source: source === 'camera' ? CameraSource.Camera : CameraSource.Photos,
    direction: CameraDirection.Rear,
    resultType: CameraResultType.Uri,
    quality: 85,
    width: 1600,
    height: 1600,
    correctOrientation: true,
    saveToGallery: false,
  });
  if (!photo.webPath) throw new Error('The photo could not be opened. Please try again.');
  const response = await fetch(photo.webPath);
  if (!response.ok) throw new Error('The photo could not be read. Please try again.');
  const blob = await response.blob();
  return new File([blob], `sortly-photo.${photo.format || 'jpeg'}`, {
    type: blob.type || 'image/jpeg',
  });
}

export function cameraErrorMessage(error) {
  const message = String(error?.message || error || '');
  if (/cancel/i.test(message)) return null;
  if (/denied|permission|access/i.test(message)) {
    return 'Photo access is disabled. Allow camera or photo access for Sortly in iPhone Settings, or search for your item below.';
  }
  return 'The camera or photo library could not open. Please try again, or search for your item below.';
}
