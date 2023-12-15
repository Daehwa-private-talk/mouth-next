'use client';

import AuthApi from '@/apis/AuthApi';

export default function List() {
  const onclickTest = async () => {
    await AuthApi.test();
  };
  return (
    <main>
      list
      <br />
      <button onClick={onclickTest}>test</button>
    </main>
  );
}
