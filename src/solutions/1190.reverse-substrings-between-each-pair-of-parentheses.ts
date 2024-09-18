/*
 * @lc app=leetcode id=1190 lang=typescript
 *
 * [1190] Reverse Substrings Between Each Pair of Parentheses
 */

// @lc code=start
function reverseParentheses(s: string): string {
    const stack = Array.of('');
    const len = s.length;
    let idx = 0;
    let i = 0;

    while (i < len) {
        const c = s.charAt(i);

        if (c === ')') {
            const ss = stack.pop() ?? '';
            let rs = '';
            idx--;

            if (ss && idx >= 0) {
                for (const chr of ss) {
                    rs = chr + rs;
                }
                stack[idx] += rs;
            }
        } else if (c === '(') {
            stack.push('');
            idx++;
        } else {
            stack[idx] += c;
        }
        i++;
    }
    return stack[0];
};
// @lc code=end

/*
console.log(reverseParentheses('(abcd)')); // dcba
console.log(reverseParentheses('(u(love)i)')) // iloveu
console.log(reverseParentheses('(ed(et(oc))el)')) // leetcode
console.log(reverseParentheses("a(bcdefghijkl(mno)p)q")) // "apmnolkjihgfedcbq"
console.log(reverseParentheses("((eqk((h))))")) // "eqkh"
console.log(reverseParentheses("((e(f()(((()vbl))s)i(hbo)(j((emr(g((dyvz(j(k))qn(r(s))(by()lg)(z)(v))po(ri))uq)(())(i)((((joovdi(r(hov)tk)ycpv))(uu)n)((pc(kmhzko(h)j())x)idpe(tf(a()j)lcszq)el)e)(q)s)))h((()hq))ty)z((r)(etuimhqk(vc)o(x(eavtr)c())gr(iaeh))(uijw)ribmj((nmxndbljlphzisqms)q)hp(()(((k)y(qfjwg)t(v)rye(mm)jonu()gwv))(()dtc(nf)a)q)(l(g)ls)(elxperab)ugnutxcd)ucbet)joc(e(ka)))ayudqadlo()(s(rkyp)u)uoukgnkbxvgqpm()u()ofcoobafiyurfx()bwcnlgnjieh((up)lfo(nfzid(wpcttauya((d)(lt(s)fa(o))it(gn)(imb(rp(b)v(w((kt())qcia(lsu(nx)biucqc)g(rjvzm)))(af(p)(km)c(ozd)i(a(ufpmqyty)gd(unoo()ncwc)b(buj)s))(z))yh)goq(u)((kn)kpa)kfe(r(aurgx)ke)xpa(lofufr((r())d)(wlw(ew)))))(k)()(lwq)wksx))pavt(w)n(jn)gewybef(t)djbyk((b))lkqiyxo(on)yckdkzfmradisc()(o)qdl((asms(c((t)zwcc)g)(pc)()e((((rlm(jegb)zcu((bw(mbps(g)n)fgkjkb(fp(vm(tzsp)(t((t)d()c(x(ktviam(e((r)xfktm)vc(w)hi(ylenyelvde(lu((xce)ofbiv)je)t((oqp)jng)vr)o)ctdkzogm((km)nk))gv)xjueo(qmclm()r)ttg))c)wv())qlrs)(sl(fo(e))nxsjmgxt)nyg(dn()((((ri(b(as()qyg)amcy)vk()()((ny(()(x(gu(q)lxx(m()))))))))))))))))))"))
// "eakcojeytqhhjemrquvzbylgrsnqjkzvydpoirgiexkmhzkohjcpidpeqzsclajfteljoovdikthovrycpvuunqshboivblsfzdcxtunguelxperablglskygwjfqtvryemmjonugwvanfctdqphsmqsizhpljlbdnxmnqjmbiruijwetuimhqkcvoceavtrxgrheairucbetayudqadlourkypsuoukgnkbxvgqpmuofcoobafiyurfxbwcnlgnjiehnfziddoafstlitnghyrpbvtkqciacqcuibnxuslgmzvjrwaytyqmpfugdcwcnoonubjubsiozdckmpfazbmigoquapkknkfeekaurgxrxpawlwwerdrfufolayuattcpwkqwlwksxofluppavtwnnjgewybeftdjbykblkqiyxonoyckdkzfmradiscoqdlasmsgtzwccccperlmbgejzcudnriycmaasqygbvknyxmxxlquggynsleofnxsjmgxtbwngspbmfgkjkbvwvmpszttdcvgktviamoylenyelvdeejecxofbivultgnjoqpvrihwcvrxfktmectdkzogmknkmxxjueormlcmqttgtcpfqlrs"
*/