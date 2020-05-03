import { assertEquals } from 'https://deno.land/std/testing/asserts.ts';
import { encode } from './mod.ts';

Deno.test('encodeUnsubscribePacket', function encodeUnsubscribePacket() {
  assertEquals(
    encode({
      type: 'unsubscribe',
      id: 1,
      topics: ['a/b', 'c/d'],
    }),
    [
      // fixedHeader
      0xa2, // packetType + flags
      12, // remainingLength
      // variableHeader
      0, // id MSB
      1, // id LSB
      // payload
      0, // topic length MSB
      3, // topic length LSB
      97, // 'a'
      47, // '/'
      98, // 'b'
      0, // topic length MSB
      3, // topic length LSB
      99, // 'c'
      47, // '/'
      100, // 'd'
    ]
  );
});
