'use client';

import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { useSearchParams, usePathname, useRouter } from 'next/navigation';
import { useDebouncedCallback } from 'use-debounce';

export default function Search({ placeholder }: { placeholder: string }) {
  const searchParams = useSearchParams();   // useSearchParams hook 可以更新搜索参数。
  const pathname = usePathname();   // 获取当前的路径
  const { replace } = useRouter();  

  /**
   * 此方法捕获用户的键盘输入。
   * useDebouncedCallback防止高频输入查询，用户停止输入300ms后才提交查询。
   */
  const handleSearch = useDebouncedCallback((term) => {
    console.log(`Searching... ${term}`);
    // 搜索字符串
    const params = new URLSearchParams(searchParams); //URLSearchParams是一个内置组件，不需要引用。
    params.set('page', '1');
    if (term) {
      params.set('query', term);
    } else {
      params.delete('query');
    }
    replace(`${pathname}?${params.toString()}`);  // 根据用户的搜索条件跳转到新的URL。
  }, 300);

  return (
    <div className="relative flex flex-1 flex-shrink-0">
      <label htmlFor="search" className="sr-only">
        Search
      </label>
      <input
        className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
        placeholder={placeholder}
        onChange={(e) => {
          handleSearch(e.target.value);
        }}
        defaultValue={searchParams.get('query')?.toString()}  
      />
      <MagnifyingGlassIcon className="absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
    </div>
  );
}
