/*
   Licensed to the Apache Software Foundation (ASF) under one or more
   contributor license agreements.  See the NOTICE file distributed with
   this work for additional information regarding copyright ownership.
   The ASF licenses this file to You under the Apache License, Version 2.0
   (the "License"); you may not use this file except in compliance with
   the License.  You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/
$(document).ready(function() {

    $(".click-title").mouseenter( function(    e){
        e.preventDefault();
        this.style.cursor="pointer";
    });
    $(".click-title").mousedown( function(event){
        event.preventDefault();
    });

    // Ugly code while this script is shared among several pages
    try{
        refreshHitsPerSecond(true);
    } catch(e){}
    try{
        refreshResponseTimeOverTime(true);
    } catch(e){}
    try{
        refreshResponseTimePercentiles();
    } catch(e){}
});


var responseTimePercentilesInfos = {
        data: {"result": {"minY": 75.0, "minX": 0.0, "maxY": 42063.0, "series": [{"data": [[0.0, 75.0], [0.1, 81.0], [0.2, 83.0], [0.3, 84.0], [0.4, 85.0], [0.5, 85.0], [0.6, 86.0], [0.7, 87.0], [0.8, 87.0], [0.9, 88.0], [1.0, 88.0], [1.1, 89.0], [1.2, 89.0], [1.3, 89.0], [1.4, 90.0], [1.5, 90.0], [1.6, 90.0], [1.7, 91.0], [1.8, 91.0], [1.9, 91.0], [2.0, 91.0], [2.1, 92.0], [2.2, 92.0], [2.3, 92.0], [2.4, 92.0], [2.5, 92.0], [2.6, 93.0], [2.7, 93.0], [2.8, 93.0], [2.9, 93.0], [3.0, 94.0], [3.1, 94.0], [3.2, 94.0], [3.3, 94.0], [3.4, 94.0], [3.5, 94.0], [3.6, 95.0], [3.7, 95.0], [3.8, 95.0], [3.9, 95.0], [4.0, 95.0], [4.1, 95.0], [4.2, 96.0], [4.3, 96.0], [4.4, 96.0], [4.5, 96.0], [4.6, 96.0], [4.7, 96.0], [4.8, 97.0], [4.9, 97.0], [5.0, 97.0], [5.1, 97.0], [5.2, 97.0], [5.3, 97.0], [5.4, 97.0], [5.5, 98.0], [5.6, 98.0], [5.7, 98.0], [5.8, 98.0], [5.9, 98.0], [6.0, 98.0], [6.1, 98.0], [6.2, 99.0], [6.3, 99.0], [6.4, 99.0], [6.5, 99.0], [6.6, 99.0], [6.7, 99.0], [6.8, 99.0], [6.9, 99.0], [7.0, 100.0], [7.1, 100.0], [7.2, 100.0], [7.3, 100.0], [7.4, 100.0], [7.5, 100.0], [7.6, 100.0], [7.7, 100.0], [7.8, 101.0], [7.9, 101.0], [8.0, 101.0], [8.1, 101.0], [8.2, 101.0], [8.3, 101.0], [8.4, 101.0], [8.5, 101.0], [8.6, 101.0], [8.7, 102.0], [8.8, 102.0], [8.9, 102.0], [9.0, 102.0], [9.1, 102.0], [9.2, 102.0], [9.3, 102.0], [9.4, 102.0], [9.5, 102.0], [9.6, 103.0], [9.7, 103.0], [9.8, 103.0], [9.9, 103.0], [10.0, 103.0], [10.1, 103.0], [10.2, 103.0], [10.3, 103.0], [10.4, 103.0], [10.5, 104.0], [10.6, 104.0], [10.7, 104.0], [10.8, 104.0], [10.9, 104.0], [11.0, 104.0], [11.1, 104.0], [11.2, 104.0], [11.3, 104.0], [11.4, 104.0], [11.5, 105.0], [11.6, 105.0], [11.7, 105.0], [11.8, 105.0], [11.9, 105.0], [12.0, 105.0], [12.1, 105.0], [12.2, 105.0], [12.3, 105.0], [12.4, 105.0], [12.5, 106.0], [12.6, 106.0], [12.7, 106.0], [12.8, 106.0], [12.9, 106.0], [13.0, 106.0], [13.1, 106.0], [13.2, 106.0], [13.3, 106.0], [13.4, 107.0], [13.5, 107.0], [13.6, 107.0], [13.7, 107.0], [13.8, 107.0], [13.9, 107.0], [14.0, 107.0], [14.1, 107.0], [14.2, 107.0], [14.3, 107.0], [14.4, 108.0], [14.5, 108.0], [14.6, 108.0], [14.7, 108.0], [14.8, 108.0], [14.9, 108.0], [15.0, 108.0], [15.1, 108.0], [15.2, 108.0], [15.3, 108.0], [15.4, 108.0], [15.5, 109.0], [15.6, 109.0], [15.7, 109.0], [15.8, 109.0], [15.9, 109.0], [16.0, 109.0], [16.1, 109.0], [16.2, 109.0], [16.3, 109.0], [16.4, 110.0], [16.5, 110.0], [16.6, 110.0], [16.7, 110.0], [16.8, 110.0], [16.9, 110.0], [17.0, 110.0], [17.1, 110.0], [17.2, 110.0], [17.3, 110.0], [17.4, 111.0], [17.5, 111.0], [17.6, 111.0], [17.7, 111.0], [17.8, 111.0], [17.9, 111.0], [18.0, 111.0], [18.1, 111.0], [18.2, 111.0], [18.3, 111.0], [18.4, 112.0], [18.5, 112.0], [18.6, 112.0], [18.7, 112.0], [18.8, 112.0], [18.9, 112.0], [19.0, 112.0], [19.1, 112.0], [19.2, 112.0], [19.3, 113.0], [19.4, 113.0], [19.5, 113.0], [19.6, 113.0], [19.7, 113.0], [19.8, 113.0], [19.9, 113.0], [20.0, 113.0], [20.1, 113.0], [20.2, 113.0], [20.3, 114.0], [20.4, 114.0], [20.5, 114.0], [20.6, 114.0], [20.7, 114.0], [20.8, 114.0], [20.9, 114.0], [21.0, 114.0], [21.1, 114.0], [21.2, 115.0], [21.3, 115.0], [21.4, 115.0], [21.5, 115.0], [21.6, 115.0], [21.7, 115.0], [21.8, 115.0], [21.9, 115.0], [22.0, 115.0], [22.1, 116.0], [22.2, 116.0], [22.3, 116.0], [22.4, 116.0], [22.5, 116.0], [22.6, 116.0], [22.7, 116.0], [22.8, 116.0], [22.9, 116.0], [23.0, 117.0], [23.1, 117.0], [23.2, 117.0], [23.3, 117.0], [23.4, 117.0], [23.5, 117.0], [23.6, 117.0], [23.7, 117.0], [23.8, 117.0], [23.9, 118.0], [24.0, 118.0], [24.1, 118.0], [24.2, 118.0], [24.3, 118.0], [24.4, 118.0], [24.5, 118.0], [24.6, 118.0], [24.7, 118.0], [24.8, 119.0], [24.9, 119.0], [25.0, 119.0], [25.1, 119.0], [25.2, 119.0], [25.3, 119.0], [25.4, 119.0], [25.5, 119.0], [25.6, 120.0], [25.7, 120.0], [25.8, 120.0], [25.9, 120.0], [26.0, 120.0], [26.1, 120.0], [26.2, 120.0], [26.3, 120.0], [26.4, 121.0], [26.5, 121.0], [26.6, 121.0], [26.7, 121.0], [26.8, 121.0], [26.9, 121.0], [27.0, 121.0], [27.1, 121.0], [27.2, 122.0], [27.3, 122.0], [27.4, 122.0], [27.5, 122.0], [27.6, 122.0], [27.7, 122.0], [27.8, 122.0], [27.9, 122.0], [28.0, 122.0], [28.1, 122.0], [28.2, 123.0], [28.3, 123.0], [28.4, 123.0], [28.5, 123.0], [28.6, 123.0], [28.7, 123.0], [28.8, 123.0], [28.9, 123.0], [29.0, 124.0], [29.1, 124.0], [29.2, 124.0], [29.3, 124.0], [29.4, 124.0], [29.5, 124.0], [29.6, 124.0], [29.7, 124.0], [29.8, 124.0], [29.9, 125.0], [30.0, 125.0], [30.1, 125.0], [30.2, 125.0], [30.3, 125.0], [30.4, 125.0], [30.5, 125.0], [30.6, 125.0], [30.7, 126.0], [30.8, 126.0], [30.9, 126.0], [31.0, 126.0], [31.1, 126.0], [31.2, 126.0], [31.3, 126.0], [31.4, 127.0], [31.5, 127.0], [31.6, 127.0], [31.7, 127.0], [31.8, 127.0], [31.9, 127.0], [32.0, 127.0], [32.1, 127.0], [32.2, 128.0], [32.3, 128.0], [32.4, 128.0], [32.5, 128.0], [32.6, 128.0], [32.7, 128.0], [32.8, 128.0], [32.9, 129.0], [33.0, 129.0], [33.1, 129.0], [33.2, 129.0], [33.3, 129.0], [33.4, 129.0], [33.5, 130.0], [33.6, 130.0], [33.7, 130.0], [33.8, 130.0], [33.9, 130.0], [34.0, 130.0], [34.1, 130.0], [34.2, 131.0], [34.3, 131.0], [34.4, 131.0], [34.5, 131.0], [34.6, 131.0], [34.7, 131.0], [34.8, 131.0], [34.9, 132.0], [35.0, 132.0], [35.1, 132.0], [35.2, 132.0], [35.3, 132.0], [35.4, 132.0], [35.5, 133.0], [35.6, 133.0], [35.7, 133.0], [35.8, 133.0], [35.9, 133.0], [36.0, 133.0], [36.1, 134.0], [36.2, 134.0], [36.3, 134.0], [36.4, 134.0], [36.5, 134.0], [36.6, 134.0], [36.7, 135.0], [36.8, 135.0], [36.9, 135.0], [37.0, 135.0], [37.1, 135.0], [37.2, 136.0], [37.3, 136.0], [37.4, 136.0], [37.5, 136.0], [37.6, 136.0], [37.7, 136.0], [37.8, 136.0], [37.9, 137.0], [38.0, 137.0], [38.1, 137.0], [38.2, 137.0], [38.3, 137.0], [38.4, 137.0], [38.5, 138.0], [38.6, 138.0], [38.7, 138.0], [38.8, 138.0], [38.9, 138.0], [39.0, 138.0], [39.1, 139.0], [39.2, 139.0], [39.3, 139.0], [39.4, 139.0], [39.5, 139.0], [39.6, 139.0], [39.7, 139.0], [39.8, 140.0], [39.9, 140.0], [40.0, 140.0], [40.1, 140.0], [40.2, 141.0], [40.3, 141.0], [40.4, 141.0], [40.5, 141.0], [40.6, 141.0], [40.7, 141.0], [40.8, 142.0], [40.9, 142.0], [41.0, 142.0], [41.1, 142.0], [41.2, 142.0], [41.3, 142.0], [41.4, 143.0], [41.5, 143.0], [41.6, 143.0], [41.7, 143.0], [41.8, 143.0], [41.9, 144.0], [42.0, 144.0], [42.1, 144.0], [42.2, 144.0], [42.3, 144.0], [42.4, 145.0], [42.5, 145.0], [42.6, 145.0], [42.7, 145.0], [42.8, 145.0], [42.9, 146.0], [43.0, 146.0], [43.1, 146.0], [43.2, 146.0], [43.3, 146.0], [43.4, 146.0], [43.5, 147.0], [43.6, 147.0], [43.7, 147.0], [43.8, 147.0], [43.9, 147.0], [44.0, 148.0], [44.1, 148.0], [44.2, 148.0], [44.3, 148.0], [44.4, 148.0], [44.5, 149.0], [44.6, 149.0], [44.7, 149.0], [44.8, 149.0], [44.9, 150.0], [45.0, 150.0], [45.1, 150.0], [45.2, 150.0], [45.3, 151.0], [45.4, 151.0], [45.5, 151.0], [45.6, 151.0], [45.7, 151.0], [45.8, 152.0], [45.9, 152.0], [46.0, 152.0], [46.1, 152.0], [46.2, 152.0], [46.3, 153.0], [46.4, 153.0], [46.5, 153.0], [46.6, 153.0], [46.7, 154.0], [46.8, 154.0], [46.9, 154.0], [47.0, 154.0], [47.1, 155.0], [47.2, 155.0], [47.3, 155.0], [47.4, 155.0], [47.5, 155.0], [47.6, 156.0], [47.7, 156.0], [47.8, 156.0], [47.9, 156.0], [48.0, 156.0], [48.1, 157.0], [48.2, 157.0], [48.3, 157.0], [48.4, 157.0], [48.5, 158.0], [48.6, 158.0], [48.7, 158.0], [48.8, 158.0], [48.9, 158.0], [49.0, 159.0], [49.1, 159.0], [49.2, 159.0], [49.3, 159.0], [49.4, 160.0], [49.5, 160.0], [49.6, 160.0], [49.7, 161.0], [49.8, 161.0], [49.9, 161.0], [50.0, 161.0], [50.1, 162.0], [50.2, 162.0], [50.3, 162.0], [50.4, 163.0], [50.5, 163.0], [50.6, 163.0], [50.7, 163.0], [50.8, 164.0], [50.9, 164.0], [51.0, 164.0], [51.1, 165.0], [51.2, 165.0], [51.3, 165.0], [51.4, 165.0], [51.5, 166.0], [51.6, 166.0], [51.7, 166.0], [51.8, 166.0], [51.9, 167.0], [52.0, 167.0], [52.1, 167.0], [52.2, 168.0], [52.3, 168.0], [52.4, 168.0], [52.5, 168.0], [52.6, 169.0], [52.7, 169.0], [52.8, 169.0], [52.9, 170.0], [53.0, 170.0], [53.1, 170.0], [53.2, 170.0], [53.3, 171.0], [53.4, 171.0], [53.5, 171.0], [53.6, 172.0], [53.7, 172.0], [53.8, 172.0], [53.9, 172.0], [54.0, 173.0], [54.1, 173.0], [54.2, 173.0], [54.3, 174.0], [54.4, 174.0], [54.5, 174.0], [54.6, 174.0], [54.7, 175.0], [54.8, 175.0], [54.9, 175.0], [55.0, 176.0], [55.1, 176.0], [55.2, 176.0], [55.3, 176.0], [55.4, 177.0], [55.5, 177.0], [55.6, 177.0], [55.7, 178.0], [55.8, 178.0], [55.9, 179.0], [56.0, 179.0], [56.1, 179.0], [56.2, 180.0], [56.3, 180.0], [56.4, 180.0], [56.5, 180.0], [56.6, 181.0], [56.7, 181.0], [56.8, 181.0], [56.9, 182.0], [57.0, 182.0], [57.1, 182.0], [57.2, 182.0], [57.3, 183.0], [57.4, 183.0], [57.5, 184.0], [57.6, 184.0], [57.7, 184.0], [57.8, 185.0], [57.9, 185.0], [58.0, 185.0], [58.1, 185.0], [58.2, 186.0], [58.3, 186.0], [58.4, 186.0], [58.5, 186.0], [58.6, 187.0], [58.7, 187.0], [58.8, 187.0], [58.9, 188.0], [59.0, 188.0], [59.1, 188.0], [59.2, 189.0], [59.3, 189.0], [59.4, 189.0], [59.5, 190.0], [59.6, 190.0], [59.7, 190.0], [59.8, 191.0], [59.9, 191.0], [60.0, 191.0], [60.1, 192.0], [60.2, 192.0], [60.3, 192.0], [60.4, 193.0], [60.5, 193.0], [60.6, 193.0], [60.7, 194.0], [60.8, 194.0], [60.9, 194.0], [61.0, 195.0], [61.1, 195.0], [61.2, 195.0], [61.3, 195.0], [61.4, 196.0], [61.5, 196.0], [61.6, 196.0], [61.7, 197.0], [61.8, 197.0], [61.9, 198.0], [62.0, 198.0], [62.1, 198.0], [62.2, 199.0], [62.3, 199.0], [62.4, 200.0], [62.5, 200.0], [62.6, 200.0], [62.7, 201.0], [62.8, 201.0], [62.9, 202.0], [63.0, 202.0], [63.1, 202.0], [63.2, 203.0], [63.3, 203.0], [63.4, 203.0], [63.5, 204.0], [63.6, 204.0], [63.7, 204.0], [63.8, 205.0], [63.9, 205.0], [64.0, 206.0], [64.1, 206.0], [64.2, 206.0], [64.3, 207.0], [64.4, 207.0], [64.5, 207.0], [64.6, 208.0], [64.7, 208.0], [64.8, 208.0], [64.9, 209.0], [65.0, 209.0], [65.1, 209.0], [65.2, 209.0], [65.3, 210.0], [65.4, 210.0], [65.5, 210.0], [65.6, 211.0], [65.7, 211.0], [65.8, 211.0], [65.9, 212.0], [66.0, 212.0], [66.1, 213.0], [66.2, 213.0], [66.3, 214.0], [66.4, 214.0], [66.5, 215.0], [66.6, 215.0], [66.7, 216.0], [66.8, 216.0], [66.9, 217.0], [67.0, 217.0], [67.1, 217.0], [67.2, 218.0], [67.3, 218.0], [67.4, 219.0], [67.5, 219.0], [67.6, 220.0], [67.7, 220.0], [67.8, 220.0], [67.9, 221.0], [68.0, 221.0], [68.1, 222.0], [68.2, 222.0], [68.3, 223.0], [68.4, 223.0], [68.5, 223.0], [68.6, 224.0], [68.7, 224.0], [68.8, 225.0], [68.9, 225.0], [69.0, 225.0], [69.1, 226.0], [69.2, 226.0], [69.3, 227.0], [69.4, 227.0], [69.5, 228.0], [69.6, 228.0], [69.7, 228.0], [69.8, 229.0], [69.9, 229.0], [70.0, 230.0], [70.1, 230.0], [70.2, 231.0], [70.3, 231.0], [70.4, 231.0], [70.5, 232.0], [70.6, 232.0], [70.7, 233.0], [70.8, 233.0], [70.9, 234.0], [71.0, 234.0], [71.1, 235.0], [71.2, 235.0], [71.3, 236.0], [71.4, 236.0], [71.5, 237.0], [71.6, 237.0], [71.7, 238.0], [71.8, 239.0], [71.9, 239.0], [72.0, 240.0], [72.1, 240.0], [72.2, 240.0], [72.3, 241.0], [72.4, 241.0], [72.5, 242.0], [72.6, 243.0], [72.7, 243.0], [72.8, 244.0], [72.9, 244.0], [73.0, 245.0], [73.1, 245.0], [73.2, 245.0], [73.3, 246.0], [73.4, 246.0], [73.5, 247.0], [73.6, 248.0], [73.7, 248.0], [73.8, 248.0], [73.9, 249.0], [74.0, 249.0], [74.1, 250.0], [74.2, 250.0], [74.3, 251.0], [74.4, 251.0], [74.5, 252.0], [74.6, 252.0], [74.7, 252.0], [74.8, 253.0], [74.9, 253.0], [75.0, 254.0], [75.1, 254.0], [75.2, 254.0], [75.3, 255.0], [75.4, 256.0], [75.5, 256.0], [75.6, 257.0], [75.7, 257.0], [75.8, 258.0], [75.9, 258.0], [76.0, 259.0], [76.1, 259.0], [76.2, 260.0], [76.3, 260.0], [76.4, 261.0], [76.5, 261.0], [76.6, 262.0], [76.7, 262.0], [76.8, 262.0], [76.9, 263.0], [77.0, 263.0], [77.1, 264.0], [77.2, 264.0], [77.3, 265.0], [77.4, 265.0], [77.5, 266.0], [77.6, 266.0], [77.7, 267.0], [77.8, 267.0], [77.9, 268.0], [78.0, 268.0], [78.1, 269.0], [78.2, 270.0], [78.3, 270.0], [78.4, 270.0], [78.5, 271.0], [78.6, 272.0], [78.7, 272.0], [78.8, 273.0], [78.9, 273.0], [79.0, 274.0], [79.1, 274.0], [79.2, 275.0], [79.3, 275.0], [79.4, 276.0], [79.5, 277.0], [79.6, 277.0], [79.7, 278.0], [79.8, 278.0], [79.9, 279.0], [80.0, 279.0], [80.1, 280.0], [80.2, 280.0], [80.3, 281.0], [80.4, 282.0], [80.5, 282.0], [80.6, 283.0], [80.7, 283.0], [80.8, 284.0], [80.9, 284.0], [81.0, 285.0], [81.1, 286.0], [81.2, 286.0], [81.3, 287.0], [81.4, 288.0], [81.5, 288.0], [81.6, 289.0], [81.7, 290.0], [81.8, 290.0], [81.9, 291.0], [82.0, 292.0], [82.1, 293.0], [82.2, 294.0], [82.3, 295.0], [82.4, 296.0], [82.5, 296.0], [82.6, 297.0], [82.7, 298.0], [82.8, 298.0], [82.9, 299.0], [83.0, 300.0], [83.1, 301.0], [83.2, 302.0], [83.3, 303.0], [83.4, 304.0], [83.5, 305.0], [83.6, 306.0], [83.7, 308.0], [83.8, 309.0], [83.9, 310.0], [84.0, 311.0], [84.1, 313.0], [84.2, 314.0], [84.3, 316.0], [84.4, 317.0], [84.5, 319.0], [84.6, 321.0], [84.7, 322.0], [84.8, 324.0], [84.9, 326.0], [85.0, 328.0], [85.1, 331.0], [85.2, 332.0], [85.3, 335.0], [85.4, 337.0], [85.5, 340.0], [85.6, 343.0], [85.7, 346.0], [85.8, 349.0], [85.9, 352.0], [86.0, 358.0], [86.1, 365.0], [86.2, 370.0], [86.3, 376.0], [86.4, 387.0], [86.5, 398.0], [86.6, 412.0], [86.7, 427.0], [86.8, 446.0], [86.9, 472.0], [87.0, 507.0], [87.1, 571.0], [87.2, 1086.0], [87.3, 1093.0], [87.4, 1096.0], [87.5, 1099.0], [87.6, 1100.0], [87.7, 1102.0], [87.8, 1103.0], [87.9, 1105.0], [88.0, 1106.0], [88.1, 1107.0], [88.2, 1108.0], [88.3, 1109.0], [88.4, 1110.0], [88.5, 1111.0], [88.6, 1112.0], [88.7, 1113.0], [88.8, 1114.0], [88.9, 1115.0], [89.0, 1116.0], [89.1, 1117.0], [89.2, 1118.0], [89.3, 1118.0], [89.4, 1119.0], [89.5, 1121.0], [89.6, 1122.0], [89.7, 1123.0], [89.8, 1124.0], [89.9, 1125.0], [90.0, 1126.0], [90.1, 1127.0], [90.2, 1128.0], [90.3, 1129.0], [90.4, 1130.0], [90.5, 1131.0], [90.6, 1132.0], [90.7, 1134.0], [90.8, 1135.0], [90.9, 1136.0], [91.0, 1138.0], [91.1, 1139.0], [91.2, 1140.0], [91.3, 1141.0], [91.4, 1142.0], [91.5, 1144.0], [91.6, 1145.0], [91.7, 1146.0], [91.8, 1148.0], [91.9, 1150.0], [92.0, 1152.0], [92.1, 1154.0], [92.2, 1155.0], [92.3, 1158.0], [92.4, 1160.0], [92.5, 1162.0], [92.6, 1163.0], [92.7, 1165.0], [92.8, 1167.0], [92.9, 1170.0], [93.0, 1173.0], [93.1, 1175.0], [93.2, 1179.0], [93.3, 1182.0], [93.4, 1185.0], [93.5, 1188.0], [93.6, 1191.0], [93.7, 1194.0], [93.8, 1199.0], [93.9, 1203.0], [94.0, 1207.0], [94.1, 1215.0], [94.2, 1220.0], [94.3, 1226.0], [94.4, 1235.0], [94.5, 1246.0], [94.6, 1253.0], [94.7, 1264.0], [94.8, 1285.0], [94.9, 1298.0], [95.0, 1325.0], [95.1, 1348.0], [95.2, 1473.0], [95.3, 3094.0], [95.4, 3100.0], [95.5, 3104.0], [95.6, 3107.0], [95.7, 3110.0], [95.8, 3113.0], [95.9, 3116.0], [96.0, 3119.0], [96.1, 3122.0], [96.2, 3125.0], [96.3, 3127.0], [96.4, 3130.0], [96.5, 3133.0], [96.6, 3136.0], [96.7, 3141.0], [96.8, 3145.0], [96.9, 3149.0], [97.0, 3158.0], [97.1, 3167.0], [97.2, 3177.0], [97.3, 3197.0], [97.4, 3216.0], [97.5, 3287.0], [97.6, 3384.0], [97.7, 7102.0], [97.8, 7109.0], [97.9, 7116.0], [98.0, 7121.0], [98.1, 7126.0], [98.2, 7133.0], [98.3, 7139.0], [98.4, 7150.0], [98.5, 7161.0], [98.6, 7179.0], [98.7, 7223.0], [98.8, 15104.0], [98.9, 15117.0], [99.0, 15124.0], [99.1, 15132.0], [99.2, 15143.0], [99.3, 15157.0], [99.4, 15401.0], [99.5, 21119.0], [99.6, 21143.0], [99.7, 22119.0], [99.8, 24143.0], [99.9, 36147.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
        getOptions: function() {
            return {
                series: {
                    points: { show: false }
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentiles'
                },
                xaxis: {
                    tickDecimals: 1,
                    axisLabel: "Percentiles",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Percentile value in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : %x.2 percentile was %y ms"
                },
                selection: { mode: "xy" },
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentiles"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesPercentiles"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesPercentiles"), dataset, prepareOverviewOptions(options));
        }
};

/**
 * @param elementId Id of element where we display message
 */
function setEmptyGraph(elementId) {
    $(function() {
        $(elementId).text("No graph series with filter="+seriesFilter);
    });
}

// Response times percentiles
function refreshResponseTimePercentiles() {
    var infos = responseTimePercentilesInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimePercentiles");
        return;
    }
    if (isGraph($("#flotResponseTimesPercentiles"))){
        infos.createGraph();
    } else {
        var choiceContainer = $("#choicesResponseTimePercentiles");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesPercentiles", "#overviewResponseTimesPercentiles");
        $('#bodyResponseTimePercentiles .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimeDistributionInfos = {
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 18587.0, "series": [{"data": [[0.0, 2343.0], [600.0, 12.0], [700.0, 2.0], [900.0, 1.0], [1000.0, 122.0], [1100.0, 2106.0], [1200.0, 364.0], [1300.0, 82.0], [1400.0, 21.0], [1500.0, 8.0], [1600.0, 1.0], [1700.0, 5.0], [3000.0, 40.0], [3100.0, 651.0], [3200.0, 73.0], [3300.0, 25.0], [3400.0, 7.0], [3500.0, 2.0], [7100.0, 327.0], [7000.0, 17.0], [7200.0, 23.0], [7300.0, 5.0], [7400.0, 3.0], [7500.0, 1.0], [15100.0, 203.0], [15200.0, 4.0], [15000.0, 6.0], [15300.0, 1.0], [15400.0, 2.0], [16100.0, 1.0], [21100.0, 63.0], [21200.0, 10.0], [21000.0, 24.0], [22100.0, 22.0], [22200.0, 2.0], [22400.0, 1.0], [24100.0, 19.0], [24300.0, 1.0], [100.0, 18587.0], [28100.0, 14.0], [28200.0, 3.0], [28500.0, 1.0], [36100.0, 13.0], [36200.0, 2.0], [42000.0, 24.0], [200.0, 6895.0], [300.0, 1202.0], [400.0, 160.0], [500.0, 50.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 42000.0, "title": "Response Time Distribution"}},
        getOptions: function() {
            var granularity = this.data.result.granularity;
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    barWidth: this.data.result.granularity
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " responses for " + label + " were between " + xval + " and " + (xval + granularity) + " ms";
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimeDistribution"), prepareData(data.result.series, $("#choicesResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshResponseTimeDistribution() {
    var infos = responseTimeDistributionInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeDistribution");
        return;
    }
    if (isGraph($("#flotResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var syntheticResponseTimeDistributionInfos = {
        data: {"result": {"minY": 48.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 29187.0, "series": [{"data": [[0.0, 29187.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 2760.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 1556.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [[3.0, 48.0]], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 3.0, "title": "Synthetic Response Times Distribution"}},
        getOptions: function() {
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendSyntheticResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times ranges",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                    tickLength:0,
                    min:-0.5,
                    max:3.5
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    align: "center",
                    barWidth: 0.25,
                    fill:.75
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " " + label;
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            options.xaxis.ticks = data.result.ticks;
            $.plot($("#flotSyntheticResponseTimeDistribution"), prepareData(data.result.series, $("#choicesSyntheticResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshSyntheticResponseTimeDistribution() {
    var infos = syntheticResponseTimeDistributionInfos;
    prepareSeries(infos.data, true);
    if (isGraph($("#flotSyntheticResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerSyntheticResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var activeThreadsOverTimeInfos = {
        data: {"result": {"minY": 16.46699787083037, "minX": 1.73902698E12, "maxY": 98.38647500816724, "series": [{"data": [[1.73902728E12, 50.0], [1.73902698E12, 16.46699787083037], [1.73902716E12, 50.0], [1.73902734E12, 64.69387755102046], [1.73902704E12, 44.11061120543299], [1.73902722E12, 50.0], [1.7390274E12, 98.38647500816724], [1.7390271E12, 50.0]], "isOverall": false, "label": "jp@gc - Ultimate Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7390274E12, "title": "Active Threads Over Time"}},
        getOptions: function() {
            return {
                series: {
                    stack: true,
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 6,
                    show: true,
                    container: '#legendActiveThreadsOverTime'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                selection: {
                    mode: 'xy'
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : At %x there were %y active threads"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesActiveThreadsOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotActiveThreadsOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewActiveThreadsOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Active Threads Over Time
function refreshActiveThreadsOverTime(fixTimestamps) {
    var infos = activeThreadsOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 25200000);
    }
    if(isGraph($("#flotActiveThreadsOverTime"))) {
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesActiveThreadsOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotActiveThreadsOverTime", "#overviewActiveThreadsOverTime");
        $('#footerActiveThreadsOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var timeVsThreadsInfos = {
        data: {"result": {"minY": 103.63571428571429, "minX": 1.0, "maxY": 21117.0, "series": [{"data": [[2.0, 15128.0], [3.0, 21117.0], [4.0, 15121.0], [5.0, 16190.0], [6.0, 7093.0], [7.0, 15129.0], [8.0, 15109.0], [9.0, 15103.0], [10.0, 328.7313432835821], [11.0, 279.77108433734935], [12.0, 272.19101123595505], [13.0, 249.76], [14.0, 250.45544554455444], [15.0, 230.52173913043475], [16.0, 223.8083333333333], [17.0, 159.54399999999998], [18.0, 149.9481481481481], [19.0, 149.8424657534246], [20.0, 103.63571428571429], [21.0, 306.8333333333333], [22.0, 198.77215189873414], [23.0, 235.3148148148148], [24.0, 150.30722891566262], [25.0, 150.12790697674419], [26.0, 156.55688622754485], [27.0, 133.06214689265533], [28.0, 136.72316384180795], [29.0, 152.2552083333333], [30.0, 143.58333333333331], [31.0, 115.46733668341706], [32.0, 146.60591133004928], [33.0, 126.82587064676619], [34.0, 177.99999999999997], [35.0, 191.58914728682174], [36.0, 192.28915662650604], [37.0, 187.6234567901235], [38.0, 174.04458598726112], [39.0, 166.6], [40.0, 291.2323232323232], [41.0, 247.5359477124184], [42.0, 150.20434782608694], [43.0, 138.16595744680862], [44.0, 157.48971193415636], [45.0, 153.7400881057269], [46.0, 148.92139737991263], [47.0, 165.94063926940643], [48.0, 176.00970873786406], [49.0, 181.69565217391303], [50.0, 649.6149469541406], [51.0, 5302.090909090909], [52.0, 1173.6666666666667], [53.0, 1095.5], [54.0, 15143.333333333332], [55.0, 9605.0], [56.0, 2623.4], [57.0, 1112.2727272727273], [58.0, 654.0], [59.0, 3543.6666666666665], [60.0, 4872.75], [61.0, 3510.0], [62.0, 2587.411764705882], [63.0, 735.0000000000001], [64.0, 1118.0], [65.0, 3694.2499999999995], [66.0, 1501.875], [67.0, 2698.1363636363635], [68.0, 2054.083333333334], [69.0, 3620.0], [70.0, 2448.1666666666665], [71.0, 2166.952380952381], [72.0, 1414.6470588235295], [73.0, 603.1428571428571], [74.0, 1891.7777777777778], [75.0, 944.5454545454545], [76.0, 3016.5], [77.0, 5916.000000000001], [78.0, 1754.5454545454545], [79.0, 1129.4], [80.0, 278.4285714285714], [81.0, 3480.0], [82.0, 513.8000000000001], [83.0, 2677.692307692308], [84.0, 1126.2857142857142], [85.0, 1514.1666666666665], [86.0, 4450.75], [87.0, 15232.0], [90.0, 8147.8], [91.0, 2726.0454545454545], [89.0, 3230.0], [88.0, 217.33333333333334], [92.0, 2898.925925925926], [93.0, 5493.375], [94.0, 1828.351351351352], [95.0, 1141.415384615385], [96.0, 3504.2580645161283], [97.0, 1951.9749999999992], [98.0, 2628.9642857142862], [99.0, 1679.2272727272725], [100.0, 1161.9519918283956], [1.0, 15085.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[51.51783851450056, 647.9617299037305]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Time VS Threads"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: { noColumns: 2,show: true, container: '#legendTimeVsThreads' },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s: At %x.2 active threads, Average response time was %y.2 ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesTimeVsThreads"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotTimesVsThreads"), dataset, options);
            // setup overview
            $.plot($("#overviewTimesVsThreads"), dataset, prepareOverviewOptions(options));
        }
};

// Time vs threads
function refreshTimeVsThreads(){
    var infos = timeVsThreadsInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTimeVsThreads");
        return;
    }
    if(isGraph($("#flotTimesVsThreads"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTimeVsThreads");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTimesVsThreads", "#overviewTimesVsThreads");
        $('#footerTimeVsThreads .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var bytesThroughputOverTimeInfos = {
        data : {"result": {"minY": 1508.55, "minX": 1.73902698E12, "maxY": 111713.66666666667, "series": [{"data": [[1.73902728E12, 42817.25], [1.73902698E12, 13362.016666666666], [1.73902716E12, 8475.533333333333], [1.73902734E12, 13418.85], [1.73902704E12, 111713.66666666667], [1.73902722E12, 78426.03333333334], [1.7390274E12, 29138.883333333335], [1.7390271E12, 22578.683333333334]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.73902728E12, 8503.25], [1.73902698E12, 2653.616666666667], [1.73902716E12, 1508.55], [1.73902734E12, 2446.45], [1.73902704E12, 22185.666666666668], [1.73902722E12, 15565.75], [1.7390274E12, 5759.233333333334], [1.7390271E12, 4474.8]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7390274E12, "title": "Bytes Throughput Over Time"}},
        getOptions : function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity) ,
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Bytes / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendBytesThroughputOverTime'
                },
                selection: {
                    mode: "xy"
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y"
                }
            };
        },
        createGraph : function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesBytesThroughputOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotBytesThroughputOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewBytesThroughputOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Bytes throughput Over Time
function refreshBytesThroughputOverTime(fixTimestamps) {
    var infos = bytesThroughputOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 25200000);
    }
    if(isGraph($("#flotBytesThroughputOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesBytesThroughputOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotBytesThroughputOverTime", "#overviewBytesThroughputOverTime");
        $('#footerBytesThroughputOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimesOverTimeInfos = {
        data: {"result": {"minY": 101.77288857345651, "minX": 1.73902698E12, "maxY": 4001.608536585367, "series": [{"data": [[1.73902728E12, 613.2482834994472], [1.73902698E12, 101.77288857345651], [1.73902716E12, 4001.608536585367], [1.73902734E12, 2478.702947845802], [1.73902704E12, 223.2562818336162], [1.73902722E12, 393.6426324703591], [1.7390274E12, 1274.8650767722963], [1.7390271E12, 1043.6415649978971]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7390274E12, "title": "Response Time Over Time"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average response time was %y ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Times Over Time
function refreshResponseTimeOverTime(fixTimestamps) {
    var infos = responseTimesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 25200000);
    }
    if(isGraph($("#flotResponseTimesOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesOverTime", "#overviewResponseTimesOverTime");
        $('#footerResponseTimesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var latenciesOverTimeInfos = {
        data: {"result": {"minY": 101.77004968062454, "minX": 1.73902698E12, "maxY": 3027.504878048782, "series": [{"data": [[1.73902728E12, 613.2462901439632], [1.73902698E12, 101.77004968062454], [1.73902716E12, 3027.504878048782], [1.73902734E12, 2097.2766439909296], [1.73902704E12, 223.25246179966], [1.73902722E12, 388.55081054923795], [1.7390274E12, 1233.6475008167224], [1.7390271E12, 1025.955826672276]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7390274E12, "title": "Latencies Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response latencies in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendLatenciesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average latency was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesLatenciesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotLatenciesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewLatenciesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Latencies Over Time
function refreshLatenciesOverTime(fixTimestamps) {
    var infos = latenciesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyLatenciesOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 25200000);
    }
    if(isGraph($("#flotLatenciesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesLatenciesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotLatenciesOverTime", "#overviewLatenciesOverTime");
        $('#footerLatenciesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var connectTimeOverTimeInfos = {
        data: {"result": {"minY": 59.86160397444996, "minX": 1.73902698E12, "maxY": 3953.498780487801, "series": [{"data": [[1.73902728E12, 562.81373200443], [1.73902698E12, 59.86160397444996], [1.73902716E12, 3953.498780487801], [1.73902734E12, 2431.400604686322], [1.73902704E12, 153.68573853989756], [1.73902722E12, 325.1439632228409], [1.7390274E12, 1216.7219862789882], [1.7390271E12, 994.9730753050064]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7390274E12, "title": "Connect Time Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getConnectTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average Connect Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendConnectTimeOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average connect time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesConnectTimeOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotConnectTimeOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewConnectTimeOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Connect Time Over Time
function refreshConnectTimeOverTime(fixTimestamps) {
    var infos = connectTimeOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyConnectTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 25200000);
    }
    if(isGraph($("#flotConnectTimeOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesConnectTimeOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotConnectTimeOverTime", "#overviewConnectTimeOverTime");
        $('#footerConnectTimeOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var responseTimePercentilesOverTimeInfos = {
        data: {"result": {"minY": 75.0, "minX": 1.73902698E12, "maxY": 36202.0, "series": [{"data": [[1.73902728E12, 21139.0], [1.73902698E12, 413.0], [1.73902716E12, 36172.0], [1.73902734E12, 28187.0], [1.73902704E12, 7547.0], [1.73902722E12, 36174.0], [1.7390274E12, 36202.0], [1.7390271E12, 28215.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.73902728E12, 77.0], [1.73902698E12, 75.0], [1.73902716E12, 83.0], [1.73902734E12, 79.0], [1.73902704E12, 82.0], [1.73902722E12, 83.0], [1.7390274E12, 83.0], [1.7390271E12, 81.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.73902728E12, 1147.0], [1.73902698E12, 118.0], [1.73902716E12, 15121.0], [1.73902734E12, 7122.0], [1.73902704E12, 294.0], [1.73902722E12, 1127.0], [1.7390274E12, 3132.0], [1.7390271E12, 3102.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.73902728E12, 7157.0], [1.73902698E12, 143.0], [1.73902716E12, 36132.8], [1.73902734E12, 21145.0], [1.73902704E12, 1245.140000000003], [1.73902722E12, 3174.0], [1.7390274E12, 21117.82], [1.7390271E12, 15195.07]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.73902728E12, 128.0], [1.73902698E12, 100.0], [1.73902716E12, 123.0], [1.73902734E12, 135.0], [1.73902704E12, 176.0], [1.73902722E12, 206.0], [1.7390274E12, 165.0], [1.7390271E12, 122.0]], "isOverall": false, "label": "Median", "isController": false}, {"data": [[1.73902728E12, 3116.2], [1.73902698E12, 126.0], [1.73902716E12, 22122.8], [1.73902734E12, 15129.0], [1.73902704E12, 345.0], [1.73902722E12, 1189.0], [1.7390274E12, 7138.099999999999], [1.7390271E12, 7095.450000000001]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7390274E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Response Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentilesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Response time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentilesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimePercentilesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimePercentilesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Time Percentiles Over Time
function refreshResponseTimePercentilesOverTime(fixTimestamps) {
    var infos = responseTimePercentilesOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 25200000);
    }
    if(isGraph($("#flotResponseTimePercentilesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimePercentilesOverTime", "#overviewResponseTimePercentilesOverTime");
        $('#footerResponseTimePercentilesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var responseTimeVsRequestInfos = {
    data: {"result": {"minY": 96.0, "minX": 1.0, "maxY": 42063.0, "series": [{"data": [[2.0, 15103.0], [3.0, 1163.0], [4.0, 3130.0], [5.0, 3135.0], [6.0, 1169.0], [7.0, 7112.5], [8.0, 1110.0], [9.0, 1094.0], [10.0, 1099.5], [11.0, 1115.0], [12.0, 148.0], [13.0, 134.5], [14.0, 369.0], [15.0, 1109.0], [16.0, 1102.5], [17.0, 131.0], [18.0, 126.5], [19.0, 121.5], [21.0, 147.0], [23.0, 137.5], [24.0, 113.0], [25.0, 1102.0], [26.0, 123.0], [27.0, 117.5], [28.0, 114.0], [29.0, 116.0], [30.0, 133.0], [31.0, 113.0], [33.0, 109.0], [32.0, 137.0], [35.0, 139.0], [37.0, 128.0], [36.0, 123.5], [38.0, 130.0], [39.0, 1106.0], [41.0, 119.5], [42.0, 119.5], [45.0, 127.0], [44.0, 115.5], [46.0, 114.5], [48.0, 371.0], [51.0, 172.0], [50.0, 113.0], [53.0, 121.5], [55.0, 290.0], [54.0, 108.0], [56.0, 129.5], [57.0, 114.0], [59.0, 124.0], [58.0, 104.0], [61.0, 139.0], [60.0, 111.0], [62.0, 121.0], [63.0, 120.5], [65.0, 113.0], [64.0, 111.5], [67.0, 107.0], [66.0, 1112.5], [68.0, 111.5], [70.0, 116.0], [71.0, 268.0], [69.0, 122.0], [74.0, 124.0], [72.0, 117.0], [73.0, 144.0], [75.0, 125.0], [77.0, 123.0], [76.0, 127.0], [78.0, 123.0], [81.0, 135.0], [80.0, 116.0], [83.0, 112.0], [87.0, 152.0], [84.0, 115.5], [85.0, 126.5], [90.0, 141.5], [89.0, 122.0], [88.0, 125.0], [95.0, 123.0], [94.0, 211.0], [93.0, 120.0], [98.0, 132.5], [97.0, 125.0], [96.0, 189.0], [103.0, 144.0], [102.0, 124.5], [100.0, 130.0], [101.0, 259.0], [105.0, 114.0], [107.0, 124.0], [111.0, 120.0], [108.0, 114.5], [110.0, 272.0], [112.0, 117.0], [115.0, 154.5], [113.0, 124.0], [114.0, 148.0], [118.0, 144.5], [116.0, 116.5], [119.0, 124.0], [121.0, 137.5], [123.0, 172.0], [122.0, 122.0], [126.0, 156.0], [125.0, 122.0], [127.0, 168.0], [131.0, 128.0], [129.0, 155.0], [135.0, 134.0], [133.0, 140.5], [134.0, 167.0], [128.0, 132.5], [130.0, 141.0], [141.0, 99.0], [142.0, 165.0], [138.0, 156.0], [143.0, 276.0], [140.0, 237.5], [139.0, 181.0], [150.0, 132.0], [149.0, 274.0], [145.0, 264.0], [144.0, 162.5], [147.0, 159.0], [151.0, 202.0], [158.0, 232.0], [153.0, 169.0], [156.0, 218.5], [155.0, 240.0], [154.0, 261.5], [152.0, 145.0], [160.0, 96.0], [167.0, 208.0], [166.0, 148.0], [164.0, 280.0], [163.0, 290.0], [161.0, 205.0], [171.0, 161.0], [170.0, 252.0], [168.0, 249.0], [175.0, 249.0], [172.0, 231.0], [174.0, 205.5], [179.0, 307.0], [182.0, 222.0], [184.0, 248.0], [187.0, 185.0], [188.0, 260.0], [193.0, 103.0], [199.0, 103.0], [194.0, 265.0], [196.0, 277.0], [206.0, 165.0], [201.0, 247.0], [203.0, 243.0], [213.0, 103.0], [210.0, 145.0], [215.0, 174.0], [208.0, 245.0], [217.0, 106.0], [223.0, 227.0], [224.0, 123.5], [230.0, 118.0], [231.0, 214.0], [235.0, 111.0], [236.0, 207.5], [242.0, 124.5], [255.0, 201.0], [257.0, 111.0], [263.0, 114.0], [262.0, 187.5], [270.0, 170.0], [261.0, 189.0], [256.0, 188.0], [258.0, 187.0], [275.0, 114.0], [283.0, 166.0], [273.0, 173.0], [291.0, 148.0], [292.0, 174.0], [309.0, 132.0], [318.0, 138.5], [305.0, 150.0], [1.0, 7132.5]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[33.0, 42042.0], [32.0, 21016.0], [45.0, 21028.0], [46.0, 21034.0], [3.0, 21026.0], [55.0, 42036.0], [58.0, 42063.0], [4.0, 21023.0], [75.0, 42050.0], [5.0, 42050.0], [85.0, 42054.0], [6.0, 21032.0], [7.0, 42042.0], [8.0, 42031.0], [142.0, 42059.0], [9.0, 42045.0], [10.0, 42034.0], [12.0, 21018.0], [14.0, 21029.0], [15.0, 21037.0], [1.0, 42037.0], [18.0, 31527.5], [25.0, 21024.0], [26.0, 21026.0], [29.0, 21016.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 318.0, "title": "Response Time Vs Request"}},
    getOptions: function() {
        return {
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Response Time in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: {
                noColumns: 2,
                show: true,
                container: '#legendResponseTimeVsRequest'
            },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median response time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesResponseTimeVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotResponseTimeVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewResponseTimeVsRequest"), dataset, prepareOverviewOptions(options));

    }
};

// Response Time vs Request
function refreshResponseTimeVsRequest() {
    var infos = responseTimeVsRequestInfos;
    prepareSeries(infos.data);
    if (isGraph($("#flotResponseTimeVsRequest"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeVsRequest");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimeVsRequest", "#overviewResponseTimeVsRequest");
        $('#footerResponseRimeVsRequest .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var latenciesVsRequestInfos = {
    data: {"result": {"minY": 0.0, "minX": 1.0, "maxY": 15103.0, "series": [{"data": [[2.0, 15103.0], [3.0, 1163.0], [4.0, 3130.0], [5.0, 3135.0], [6.0, 1169.0], [7.0, 7112.5], [8.0, 1110.0], [9.0, 1094.0], [10.0, 1099.5], [11.0, 1115.0], [12.0, 148.0], [13.0, 134.5], [14.0, 369.0], [15.0, 1109.0], [16.0, 1102.5], [17.0, 131.0], [18.0, 126.5], [19.0, 121.5], [21.0, 147.0], [23.0, 137.5], [24.0, 113.0], [25.0, 1102.0], [26.0, 123.0], [27.0, 117.5], [28.0, 114.0], [29.0, 116.0], [30.0, 133.0], [31.0, 113.0], [33.0, 109.0], [32.0, 137.0], [35.0, 139.0], [37.0, 128.0], [36.0, 123.5], [38.0, 130.0], [39.0, 1106.0], [41.0, 119.5], [42.0, 119.5], [45.0, 127.0], [44.0, 115.5], [46.0, 114.5], [48.0, 371.0], [51.0, 172.0], [50.0, 113.0], [53.0, 121.5], [55.0, 290.0], [54.0, 108.0], [56.0, 129.5], [57.0, 114.0], [59.0, 124.0], [58.0, 104.0], [61.0, 139.0], [60.0, 111.0], [62.0, 121.0], [63.0, 120.5], [65.0, 113.0], [64.0, 111.5], [67.0, 107.0], [66.0, 1112.5], [68.0, 111.5], [70.0, 116.0], [71.0, 268.0], [69.0, 122.0], [74.0, 124.0], [72.0, 117.0], [73.0, 144.0], [75.0, 125.0], [77.0, 123.0], [76.0, 127.0], [78.0, 123.0], [81.0, 135.0], [80.0, 116.0], [83.0, 112.0], [87.0, 152.0], [84.0, 115.5], [85.0, 126.5], [90.0, 141.5], [89.0, 122.0], [88.0, 125.0], [95.0, 123.0], [94.0, 211.0], [93.0, 120.0], [98.0, 132.5], [97.0, 125.0], [96.0, 189.0], [103.0, 144.0], [102.0, 124.5], [100.0, 130.0], [101.0, 259.0], [105.0, 114.0], [107.0, 124.0], [111.0, 120.0], [108.0, 114.5], [110.0, 272.0], [112.0, 117.0], [115.0, 154.5], [113.0, 124.0], [114.0, 148.0], [118.0, 144.5], [116.0, 116.5], [119.0, 124.0], [121.0, 137.5], [123.0, 172.0], [122.0, 122.0], [126.0, 156.0], [125.0, 122.0], [127.0, 168.0], [131.0, 128.0], [129.0, 155.0], [135.0, 134.0], [133.0, 140.5], [134.0, 167.0], [128.0, 132.5], [130.0, 141.0], [141.0, 99.0], [142.0, 165.0], [138.0, 156.0], [143.0, 276.0], [140.0, 237.5], [139.0, 181.0], [150.0, 132.0], [149.0, 274.0], [145.0, 264.0], [144.0, 162.5], [147.0, 159.0], [151.0, 202.0], [158.0, 232.0], [153.0, 169.0], [156.0, 218.5], [155.0, 240.0], [154.0, 261.5], [152.0, 145.0], [160.0, 96.0], [167.0, 208.0], [166.0, 148.0], [164.0, 280.0], [163.0, 290.0], [161.0, 205.0], [171.0, 161.0], [170.0, 252.0], [168.0, 249.0], [175.0, 249.0], [172.0, 231.0], [174.0, 205.5], [179.0, 307.0], [182.0, 222.0], [184.0, 248.0], [187.0, 185.0], [188.0, 260.0], [193.0, 103.0], [199.0, 103.0], [194.0, 265.0], [196.0, 277.0], [206.0, 165.0], [201.0, 247.0], [203.0, 243.0], [213.0, 103.0], [210.0, 145.0], [215.0, 174.0], [208.0, 245.0], [217.0, 106.0], [223.0, 227.0], [224.0, 123.5], [230.0, 118.0], [231.0, 214.0], [235.0, 111.0], [236.0, 207.5], [242.0, 124.5], [255.0, 201.0], [257.0, 111.0], [263.0, 114.0], [262.0, 187.0], [270.0, 170.0], [261.0, 189.0], [256.0, 188.0], [258.0, 187.0], [275.0, 114.0], [283.0, 166.0], [273.0, 173.0], [291.0, 148.0], [292.0, 174.0], [309.0, 132.0], [318.0, 138.5], [305.0, 150.0], [1.0, 7132.5]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[33.0, 0.0], [32.0, 0.0], [45.0, 0.0], [46.0, 0.0], [3.0, 0.0], [55.0, 0.0], [58.0, 0.0], [4.0, 0.0], [75.0, 0.0], [5.0, 0.0], [85.0, 0.0], [6.0, 0.0], [7.0, 0.0], [8.0, 0.0], [142.0, 0.0], [9.0, 0.0], [10.0, 0.0], [12.0, 0.0], [14.0, 0.0], [15.0, 0.0], [1.0, 0.0], [18.0, 0.0], [25.0, 0.0], [26.0, 0.0], [29.0, 0.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 318.0, "title": "Latencies Vs Request"}},
    getOptions: function() {
        return{
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Latency in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: { noColumns: 2,show: true, container: '#legendLatencyVsRequest' },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median Latency time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesLatencyVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotLatenciesVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewLatenciesVsRequest"), dataset, prepareOverviewOptions(options));
    }
};

// Latencies vs Request
function refreshLatenciesVsRequest() {
        var infos = latenciesVsRequestInfos;
        prepareSeries(infos.data);
        if(isGraph($("#flotLatenciesVsRequest"))){
            infos.createGraph();
        }else{
            var choiceContainer = $("#choicesLatencyVsRequest");
            createLegend(choiceContainer, infos);
            infos.createGraph();
            setGraphZoomable("#flotLatenciesVsRequest", "#overviewLatenciesVsRequest");
            $('#footerLatenciesVsRequest .legendColorBox > div').each(function(i){
                $(this).clone().prependTo(choiceContainer.find("li").eq(i));
            });
        }
};

var hitsPerSecondInfos = {
        data: {"result": {"minY": 13.666666666666666, "minX": 1.73902698E12, "maxY": 196.8, "series": [{"data": [[1.73902728E12, 75.25], [1.73902698E12, 23.85], [1.73902716E12, 13.666666666666666], [1.73902734E12, 22.85], [1.73902704E12, 196.8], [1.73902722E12, 137.76666666666668], [1.7390274E12, 49.38333333333333], [1.7390271E12, 39.61666666666667]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7390274E12, "title": "Hits Per Second"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of hits / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendHitsPerSecond"
                },
                selection: {
                    mode : 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y.2 hits/sec"
                }
            };
        },
        createGraph: function createGraph() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesHitsPerSecond"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotHitsPerSecond"), dataset, options);
            // setup overview
            $.plot($("#overviewHitsPerSecond"), dataset, prepareOverviewOptions(options));
        }
};

// Hits per second
function refreshHitsPerSecond(fixTimestamps) {
    var infos = hitsPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 25200000);
    }
    if (isGraph($("#flotHitsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesHitsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotHitsPerSecond", "#overviewHitsPerSecond");
        $('#footerHitsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var codesPerSecondInfos = {
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.73902698E12, "maxY": 196.33333333333334, "series": [{"data": [[1.73902728E12, 75.25], [1.73902698E12, 23.483333333333334], [1.73902716E12, 13.35], [1.73902734E12, 21.65], [1.73902704E12, 196.33333333333334], [1.73902722E12, 137.75], [1.7390274E12, 50.96666666666667], [1.7390271E12, 39.6]], "isOverall": false, "label": "200", "isController": false}, {"data": [[1.73902716E12, 0.31666666666666665], [1.73902734E12, 0.4], [1.73902722E12, 0.016666666666666666], [1.7390274E12, 0.05], [1.7390271E12, 0.016666666666666666]], "isOverall": false, "label": "Non HTTP response code: org.apache.http.conn.HttpHostConnectException", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7390274E12, "title": "Codes Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendCodesPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "Number of Response Codes %s at %x was %y.2 responses / sec"
                }
            };
        },
    createGraph: function() {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesCodesPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotCodesPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewCodesPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Codes per second
function refreshCodesPerSecond(fixTimestamps) {
    var infos = codesPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 25200000);
    }
    if(isGraph($("#flotCodesPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesCodesPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotCodesPerSecond", "#overviewCodesPerSecond");
        $('#footerCodesPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var transactionsPerSecondInfos = {
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.73902698E12, "maxY": 196.33333333333334, "series": [{"data": [[1.73902728E12, 75.25], [1.73902698E12, 23.483333333333334], [1.73902716E12, 13.35], [1.73902734E12, 21.65], [1.73902704E12, 196.33333333333334], [1.73902722E12, 137.75], [1.7390274E12, 50.96666666666667], [1.7390271E12, 39.6]], "isOverall": false, "label": "HTTP Request-success", "isController": false}, {"data": [[1.73902716E12, 0.31666666666666665], [1.73902734E12, 0.4], [1.73902722E12, 0.016666666666666666], [1.7390274E12, 0.05], [1.7390271E12, 0.016666666666666666]], "isOverall": false, "label": "HTTP Request-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7390274E12, "title": "Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTransactionsPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                }
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTransactionsPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTransactionsPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewTransactionsPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Transactions per second
function refreshTransactionsPerSecond(fixTimestamps) {
    var infos = transactionsPerSecondInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTransactionsPerSecond");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 25200000);
    }
    if(isGraph($("#flotTransactionsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTransactionsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTransactionsPerSecond", "#overviewTransactionsPerSecond");
        $('#footerTransactionsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var totalTPSInfos = {
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.73902698E12, "maxY": 196.33333333333334, "series": [{"data": [[1.73902728E12, 75.25], [1.73902698E12, 23.483333333333334], [1.73902716E12, 13.35], [1.73902734E12, 21.65], [1.73902704E12, 196.33333333333334], [1.73902722E12, 137.75], [1.7390274E12, 50.96666666666667], [1.7390271E12, 39.6]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.73902716E12, 0.31666666666666665], [1.73902734E12, 0.4], [1.73902722E12, 0.016666666666666666], [1.7390274E12, 0.05], [1.7390271E12, 0.016666666666666666]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7390274E12, "title": "Total Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTotalTPS"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                },
                colors: ["#9ACD32", "#FF6347"]
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTotalTPS"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTotalTPS"), dataset, options);
        // setup overview
        $.plot($("#overviewTotalTPS"), dataset, prepareOverviewOptions(options));
    }
};

// Total Transactions per second
function refreshTotalTPS(fixTimestamps) {
    var infos = totalTPSInfos;
    // We want to ignore seriesFilter
    prepareSeries(infos.data, false, true);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 25200000);
    }
    if(isGraph($("#flotTotalTPS"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTotalTPS");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTotalTPS", "#overviewTotalTPS");
        $('#footerTotalTPS .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

// Collapse the graph matching the specified DOM element depending the collapsed
// status
function collapse(elem, collapsed){
    if(collapsed){
        $(elem).parent().find(".fa-chevron-up").removeClass("fa-chevron-up").addClass("fa-chevron-down");
    } else {
        $(elem).parent().find(".fa-chevron-down").removeClass("fa-chevron-down").addClass("fa-chevron-up");
        if (elem.id == "bodyBytesThroughputOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshBytesThroughputOverTime(true);
            }
            document.location.href="#bytesThroughputOverTime";
        } else if (elem.id == "bodyLatenciesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesOverTime(true);
            }
            document.location.href="#latenciesOverTime";
        } else if (elem.id == "bodyCustomGraph") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCustomGraph(true);
            }
            document.location.href="#responseCustomGraph";
        } else if (elem.id == "bodyConnectTimeOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshConnectTimeOverTime(true);
            }
            document.location.href="#connectTimeOverTime";
        } else if (elem.id == "bodyResponseTimePercentilesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimePercentilesOverTime(true);
            }
            document.location.href="#responseTimePercentilesOverTime";
        } else if (elem.id == "bodyResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeDistribution();
            }
            document.location.href="#responseTimeDistribution" ;
        } else if (elem.id == "bodySyntheticResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshSyntheticResponseTimeDistribution();
            }
            document.location.href="#syntheticResponseTimeDistribution" ;
        } else if (elem.id == "bodyActiveThreadsOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshActiveThreadsOverTime(true);
            }
            document.location.href="#activeThreadsOverTime";
        } else if (elem.id == "bodyTimeVsThreads") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTimeVsThreads();
            }
            document.location.href="#timeVsThreads" ;
        } else if (elem.id == "bodyCodesPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCodesPerSecond(true);
            }
            document.location.href="#codesPerSecond";
        } else if (elem.id == "bodyTransactionsPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTransactionsPerSecond(true);
            }
            document.location.href="#transactionsPerSecond";
        } else if (elem.id == "bodyTotalTPS") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTotalTPS(true);
            }
            document.location.href="#totalTPS";
        } else if (elem.id == "bodyResponseTimeVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeVsRequest();
            }
            document.location.href="#responseTimeVsRequest";
        } else if (elem.id == "bodyLatenciesVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesVsRequest();
            }
            document.location.href="#latencyVsRequest";
        }
    }
}

/*
 * Activates or deactivates all series of the specified graph (represented by id parameter)
 * depending on checked argument.
 */
function toggleAll(id, checked){
    var placeholder = document.getElementById(id);

    var cases = $(placeholder).find(':checkbox');
    cases.prop('checked', checked);
    $(cases).parent().children().children().toggleClass("legend-disabled", !checked);

    var choiceContainer;
    if ( id == "choicesBytesThroughputOverTime"){
        choiceContainer = $("#choicesBytesThroughputOverTime");
        refreshBytesThroughputOverTime(false);
    } else if(id == "choicesResponseTimesOverTime"){
        choiceContainer = $("#choicesResponseTimesOverTime");
        refreshResponseTimeOverTime(false);
    }else if(id == "choicesResponseCustomGraph"){
        choiceContainer = $("#choicesResponseCustomGraph");
        refreshCustomGraph(false);
    } else if ( id == "choicesLatenciesOverTime"){
        choiceContainer = $("#choicesLatenciesOverTime");
        refreshLatenciesOverTime(false);
    } else if ( id == "choicesConnectTimeOverTime"){
        choiceContainer = $("#choicesConnectTimeOverTime");
        refreshConnectTimeOverTime(false);
    } else if ( id == "choicesResponseTimePercentilesOverTime"){
        choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        refreshResponseTimePercentilesOverTime(false);
    } else if ( id == "choicesResponseTimePercentiles"){
        choiceContainer = $("#choicesResponseTimePercentiles");
        refreshResponseTimePercentiles();
    } else if(id == "choicesActiveThreadsOverTime"){
        choiceContainer = $("#choicesActiveThreadsOverTime");
        refreshActiveThreadsOverTime(false);
    } else if ( id == "choicesTimeVsThreads"){
        choiceContainer = $("#choicesTimeVsThreads");
        refreshTimeVsThreads();
    } else if ( id == "choicesSyntheticResponseTimeDistribution"){
        choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        refreshSyntheticResponseTimeDistribution();
    } else if ( id == "choicesResponseTimeDistribution"){
        choiceContainer = $("#choicesResponseTimeDistribution");
        refreshResponseTimeDistribution();
    } else if ( id == "choicesHitsPerSecond"){
        choiceContainer = $("#choicesHitsPerSecond");
        refreshHitsPerSecond(false);
    } else if(id == "choicesCodesPerSecond"){
        choiceContainer = $("#choicesCodesPerSecond");
        refreshCodesPerSecond(false);
    } else if ( id == "choicesTransactionsPerSecond"){
        choiceContainer = $("#choicesTransactionsPerSecond");
        refreshTransactionsPerSecond(false);
    } else if ( id == "choicesTotalTPS"){
        choiceContainer = $("#choicesTotalTPS");
        refreshTotalTPS(false);
    } else if ( id == "choicesResponseTimeVsRequest"){
        choiceContainer = $("#choicesResponseTimeVsRequest");
        refreshResponseTimeVsRequest();
    } else if ( id == "choicesLatencyVsRequest"){
        choiceContainer = $("#choicesLatencyVsRequest");
        refreshLatenciesVsRequest();
    }
    var color = checked ? "black" : "#818181";
    if(choiceContainer != null) {
        choiceContainer.find("label").each(function(){
            this.style.color = color;
        });
    }
}

