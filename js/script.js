document.getElementById('booking-form').addEventListener('submit', function(e) {
    e.preventDefault(); // පිටුව Refresh වීම නවත්වනවා
    alert('ස්තූතියි! ඔබේ පණිවිඩය අපට ලැබුණා. ඉක්මනින් ඔබව සම්බන්ධ කරගන්නම්.');
    this.reset(); // ෆෝම් එකේ දත්ත මකා දමනවා
});