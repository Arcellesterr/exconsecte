enum DeviceType {
  STRING = 'string',
  NUMBER = 'number',
  BOOLEAN = 'boolean'
}

type Device = DeviceType.STRING | DeviceType.NUMBER | DeviceType.BOOLEAN;

let device: Device;
