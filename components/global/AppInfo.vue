<template>
  <div class="fixed bottom-0 right-0 m-3 bg-white">
    Version: <b>{{ $config.appVersion }}</b>
    <br />
    Locale: <b>{{ $moment($config.appLastUpdatedAt).locale() }}</b>
    <br />
    <br />
    Updated am:
    <b>{{ $moment($config.appLastUpdatedAt).format('dddd, DD.MM.YYYY, HH:mm:ss') }}</b>
    <br />
    <br />
    Updated (second): <b>{{ $moment($config.appLastUpdatedAt).startOf('second').fromNow() }}</b>
    <br />
    Updated (minute): <b>{{ $moment($config.appLastUpdatedAt).startOf('minute').fromNow() }}</b>
    <br />
    Updated (hour): <b>{{ $moment($config.appLastUpdatedAt).startOf('hour').fromNow() }}</b>
    <br />
    Updated (day): <b>{{ $moment($config.appLastUpdatedAt).startOf('day').fromNow() }}</b>
    <br />
    <br />
    Solution (seconds): <b>{{ $moment.utc($config.appLastUpdatedAt).local().startOf('seconds').fromNow() }}</b>
    <br />
    Solution (fromNow): <b>{{ $moment($config.appLastUpdatedAt).fromNow() }}</b>
    <br />
    <br />
    Hamburg: {{ $moment().tz('Europe/Berlin').format('dddd, DD.MM.YYYY, HH:mm:ss') }}
    <br />
    Maui: {{ $moment().tz('Pacific/Honolulu').format('dddd, DD.MM.YYYY, HH:mm:ss') }}
  </div>
</template>

<script></script>

<style></style>
