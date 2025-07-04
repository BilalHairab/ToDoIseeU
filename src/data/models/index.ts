export type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};
export function isValidPost(obj: any): obj is Post {
  return (
    isObject(obj) &&
    isNumber(obj.id) &&
    isNumber(obj.userId) &&
    isString(obj.body) &&
    isString(obj.title)
  );
}

export type User = {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
  phone: string;
  website: string;
  company: Company;
};
export function isValidUser(obj: any): obj is User {
  return (
    isObject(obj) &&
    isNumber(obj.id) &&
    isString(obj.name) &&
    isString(obj.username) &&
    isString(obj.email) &&
    isValidAddress(obj.address) &&
    isString(obj.phone) &&
    isString(obj.website) &&
    isValidCompany(obj.company)
  );
}

export type Company = {
  name: string;
  catchPhrase: string;
  bs: string;
};
export function isValidCompany(obj: any): obj is Geo {
  return (
    isObject(obj) &&
    isString(obj.name) &&
    isString(obj.catchPhrase) &&
    isString(obj.bs)
  );
}

export type Geo = {
  lat: string;
  lng: string;
};
export function isValidGeo(obj: any): obj is Geo {
  return isObject(obj) && isString(obj.lat) && isString(obj.lng);
}

export type Address = {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: Geo;
};

export function isValidAddress(obj: any): obj is Address {
  return (
    isObject(obj) &&
    isString(obj.street) &&
    isString(obj.suite) &&
    isString(obj.city) &&
    isString(obj.zipcode) &&
    isValidGeo(obj.geo)
  );
}

function isObject(obj: any): boolean {
  return typeof obj === 'object';
}

function isString(obj: any): boolean {
  return typeof obj === 'string';
}

function isNumber(obj: any): boolean {
  return typeof obj === 'number';
}
