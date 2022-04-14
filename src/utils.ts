import { Devices } from "./devices";

interface DeviceSize {
  width: number;
  height: number;
}

export function getDeviceSize(deviceName: Devices): DeviceSize {
  let deviceSize: DeviceSize = { width: 375, height: 812 };

  switch (deviceName) {
    case Devices.iPhone6:
    case Devices.iPhone6s:
    case Devices.iPhone7:
    case Devices.iPhone8:
    case Devices.iPhoneSE2ndGen:
      deviceSize = { width: 375, height: 667 };
      return deviceSize;
    case Devices.iPhone6Plus:
    case Devices.iPhone6sPlus:
    case Devices.iPhone7Plus:
    case Devices.iPhone8Plus:
      deviceSize = { width: 476, height: 847 };
      return deviceSize;
    case Devices.iPhoneSE1stGen:
      deviceSize = { width: 320, height: 568 };
      return deviceSize;
    case Devices.iPhoneX:
    case Devices.iPhoneXS:
    case Devices.iPhone11Pro:
    case Devices.iPhone12Mini:
    case Devices.iPhone13Mini:
      return deviceSize;
    case Devices.iPhoneXSMax:
    case Devices.iPhoneXR:
    case Devices.iPhone11:
    case Devices.iPhone11ProMax:
      deviceSize = { width: 414, height: 896 };
      return deviceSize;
    case Devices.iPhone12Pro:
    case Devices.iPhone12:
    case Devices.iPhone13Pro:
    case Devices.iPhone13:
      deviceSize = { width: 390, height: 844 };
      return deviceSize;
    case Devices.iPhone12ProMax:
    case Devices.iPhone13ProMax:
      deviceSize = { width: 428, height: 926 };
      return deviceSize;
  }
}