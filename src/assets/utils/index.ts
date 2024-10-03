export function paginate<T = any>(data: T[], perPage: number): Array<T[]> {
   return data.reduce((acc, val, i) => {
      let idx = Math.floor(i / perPage)
      //@ts-ignore
      let page: T[] = acc[idx] || (acc[idx] = [])
      page.push(val)

      return acc
   }, [])
}

export function stripr(value: number) {
   let str = '' + value;
   const num = parseInt(str.charAt(0));
   //-------
   if (str.includes('.')) return num + 1;

   return num;
}

export function smm(data: Bulkfollows) {
   const categories = data.map(item => item.category);
   //------------
   const Smm = {
      _categries: [] as Array<{ name: string, items: Bulkfollows }>,
      paginate: (count: number) => paginate(data, count),
      cateList(name: string) {
         return data.filter(item => item.category == name);
      },

      properties(data: any) {
         return Object.keys(data).map(item => {
            return {
               name: item,
               value: data[item]
            }
         })
      },

      categories(reset: boolean = false) {
         if (!reset && this._categries.length > 0) return this._categries;

         this._categries = categories.map(item => {
            return {
               name: item,
               items: this.cateList(item)
            }
         })

         return this._categries;
      }
   }


   Smm.categories();

   return Smm;
}

type BulkFollowData = typeof import('@data/bulkfollows.json')[0];

type Bulkfollows = BulkFollowData[]; 