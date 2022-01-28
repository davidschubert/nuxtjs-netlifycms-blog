<template>
  <div class="fixed bottom-0 right-0 m-3">
    Version: <b>{{ $config.appVersion }}</b>
    <br />
    Locale: <b>{{ $moment($config.appLastUpdatedAt).locale() }}</b>
    <br />
    Updated am:
    <b>{{ $moment($config.appLastUpdatedAt).format('dddd, DD.MM.YYYY, hh:mm:ss A, Z') }}</b>
    <br />
    Updated am:
    <b>{{ $moment($config.appLastUpdatedAt).format('DD.MM.YYYY, HH:mm:ss, Z') }}</b>
    <br />
    Updated <b>{{ $moment($config.appLastUpdatedAt).startOf('second').fromNow() }}</b>
    <br />
    Updated <b>{{ $moment($config.appLastUpdatedAt).startOf('minute').fromNow() }}</b>
    <br />
    Updated <b>{{ $moment($config.appLastUpdatedAt).startOf('hour').fromNow() }}</b>
    <br />
    Updated <b>{{ $moment($config.appLastUpdatedAt).startOf('day').fromNow() }}</b>
    <br />
    Solution: <b>{{ $moment.utc($config.appLastUpdatedAt).local().startOf('seconds').fromNow() }}</b>
    <br />
    Solution: <b>{{ $moment($config.appLastUpdatedAt).fromNow() }}</b>
  </div>
</template>

<script></script>

<style></style>
