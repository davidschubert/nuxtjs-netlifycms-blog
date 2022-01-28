<template>
  <div class="fixed bottom-0 right-0 m-3 bg-white">
    Version: <b>{{ $config.appVersion }}</b>
    <br />
    Locale: <b>{{ $moment($config.appLastUpdatedAt).locale() }}</b>
    <br />
    Updated am:
    <b>{{ $moment($config.appLastUpdatedAt).format('dddd, DD.MM.YYYY, HH:mm:ss') }}</b>
    <br />
    Updated (second): <b>{{ $moment($config.appLastUpdatedAt).startOf('second').fromNow() }}</b>
    <br />
    Updated (minute): <b>{{ $moment($config.appLastUpdatedAt).startOf('minute').fromNow() }}</b>
    <br />
    Updated (hour): <b>{{ $moment($config.appLastUpdatedAt).startOf('hour').fromNow() }}</b>
    <br />
    Updated (day): <b>{{ $moment($config.appLastUpdatedAt).startOf('day').fromNow() }}</b>
    <br />
    Solution (seconds): <b>{{ $moment.utc($config.appLastUpdatedAt).local().startOf('seconds').fromNow() }}</b>
    <br />
    Solution (fromNow): <b>{{ $moment($config.appLastUpdatedAt).fromNow() }}</b>
  </div>
</template>

<script></script>

<style></style>
