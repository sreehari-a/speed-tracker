
export default function importAll(r: any) {
    let images: any = [];
    console.log('r',r)
    r.keys().forEach((item: string, index: string) => {
      images.push(r(item)) ;
    });
    return images;
  }